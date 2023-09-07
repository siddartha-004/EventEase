import {useState, useEffect} from 'react'
import axios from 'axios'
import { LoginContext } from './LoginContext'

function UserLoginStore({children}) {

    let [user, setUser] = useState({})
    let [loginErr, setLoginErr]=useState('')
    let [userLoginStatus, setUserLoginStatus] = useState(false)

   
    const logInUser = (userCredentialsObj) => {

        axios.post("http://localhost:8000/user-api/login", userCredentialsObj)
        
        .then(response => {
            
            if(response.data.message==="ok"){

                // console.log(response)

                setUser({...response.data.user})
                
                localStorage.setItem("token",response.data.token);
                setLoginErr("")
                setUserLoginStatus(true)
            }
            else{
                setLoginErr(response.data.message)
                // console.log(loginErr)
            }
        })
        .catch( err => {
            if(err.response){
                setLoginErr(err.message)
              }
              if(err.request){
                setLoginErr(err.message)
              }
        })
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setUserLoginStatus(true);
        }
      }, []);

    const logOutUser = () => {
        localStorage.clear();
        setUserLoginStatus(false);
    }

    return(
        <LoginContext.Provider value={[user, loginErr, userLoginStatus, logInUser, logOutUser]}>
            {children}
        </LoginContext.Provider>
    )

}

export default UserLoginStore