import { useState, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from './LoginContext';

function UserLoginStore({ children }) {
    const [user, setUser] = useState({});
    const [loginErr, setLoginErr] = useState('');
    const [userLoginStatus, setUserLoginStatus] = useState(false);

    const logInUser = (userCredentialsObj) => {
        axios.post("http://localhost:3000/user-api/login", userCredentialsObj)
            .then(response => {
                if (response.data.message === "ok") {
                    setUser({ ...response.data.user });
                    localStorage.setItem("userId", response.data.user.userId);
                    localStorage.setItem("token", response.data.token);
                    setLoginErr("");
                    setUserLoginStatus(true);
                } else {
                    setLoginErr(response.data.message);
                }
            })
            .catch(err => {
                if (err.response) {
                    setLoginErr(err.message);
                }
                if (err.request) {
                    setLoginErr(err.message);
                }
            });
    }

    const getUser = async () => {
        try {
            const userId = localStorage.getItem('userId');
            if (userId) {
                const response = await axios.get(`http://localhost:3000/user-api/user/${userId}`);
                setUser(response.data.user);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    
    useEffect(() => {
        getUser();
        const token = localStorage.getItem('token');
        if (token) {
            setUserLoginStatus(true);
        }
    }, []);

    const logOutUser = () => {
        localStorage.clear();
        setUserLoginStatus(false);
    }

    return (
        <LoginContext.Provider value={[user, loginErr, userLoginStatus, logInUser, logOutUser, getUser]}>
            {children}
        </LoginContext.Provider>
    )
}

export default UserLoginStore;
