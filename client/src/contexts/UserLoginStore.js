import { useState, useEffect } from 'react';
import axios from 'axios';
import { LoginContext } from './LoginContext';

function UserLoginStore({ children }) {
    const [user, setUser] = useState({});
    const [loginErr, setLoginErr] = useState('');
    const [userLoginStatus, setUserLoginStatus] = useState(false);

    const logInUser = (userCredentialsObj) => {
        console.log(userCredentialsObj)
        axios.post("api/Student/login", userCredentialsObj)
            .then(response => {
                console.log(response.data)
                if (response.data.message === "Login successful") {
                    setUser({ ...response.data.user });
                    localStorage.setItem("userId", response.data.user.id);
                    //localStorage.setItem("token", response.data.token);
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
                console.log("hello")
                const response = await axios.get(`api/Student/getuser?id=${userId}`);
                console.log(response)
                console.log("bye")
                setUser(response.data.user);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };
    
    useEffect(() => {
        getUser();
        const token = localStorage.getItem('userId');
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
