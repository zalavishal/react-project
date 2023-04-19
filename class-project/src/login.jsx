import React, { useState } from 'react';
import Header from './commonComponent/02Headerfile';
import "./login.css";
import CustomHooks from "./hooks/customHook";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';


// const login = () => {



// const { handleChange, inp, errors } = CustomHooks({}, { usernameError: "", passwordError: "" })
// const LoginForm = async (e) => {
//     e.preventDefault();
//     console.log("login click",inp);
//     let url="https://justjayapi.000webhostapp.com/login";
//     let LoginRes = await axios.get(url, {
//         params: {
//             username: inp.username,
//             password: inp.password
//         }
//     })
//         .then(function (response) {
//             console.log("success response",inp);
//             // console.log(response.data.data=inp);
//             console.log(response.data[0]);
//             // return response;
//         })
//         .catch(function (error) {
//             console.log("if error");
//             console.log(error);
//         })  
//         .finally(function () {
//             console.log("always executed");
//             // always executed
//         });
//         console.log("login click",LoginRes);
// }








const Login = () => {

    // const CustHookData = CustomHook({},{usernameError:"",passwordError:""})
    // CustHookData.handleChange
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies()
    const [required, setRequired] = useState()

    const { handleChange, inp, errors } = CustomHooks({}, { usernameError: "", passwordError: "" })
    const LoginForm = async (e) => {
        e.preventDefault();
        // console.log("login click", inp);
        // let url = "https://justjayapi.000webhostapp.com/login";
        if (Object.keys(inp).length  > 0) {
        let url = "https://justjayapi.000webhostapp.com/login?username=admin&password=123";
        let LoginRes = await axios.get(url, {
            params: {
                username: inp.username,
                password: inp.password
            }
        }).then(function (response) {
            // console.log("success response");
            // console.log(response.data.Data[0].role_id);
            if (response.data.Code == 1) {
                setCookie('loginsuccess', 1)
                setCookie('username', response.data.Data[0].username)
                setCookie('password', response.data.Data[0].password)
                if (response.data.Data[0].role_id == 1) {
                    navigate("/admin")
                } else {
                    navigate("/")
                }
            } else {
                console.log("Invalid user");
            }
            return response;
        }).catch(function (error) {
            console.log("If error");
            console.log(error);
        })

    }else{
        setRequired("user name and password is required");
        console.log("user name and password is required");
    }
        // .finally(function () {
        //     // console.log("always executed");
        //     // always executed
        // });
        // console.log("login click", LoginRes);
    }
    return (
        <>
            <Header />
            <div className='backbg'>
                <div className="login-container">
                    <form method='Get' onSubmit={LoginForm}>
                        <h1>Login</h1>
                        <div className="username t-input">
                            <input onChange={handleChange} name="username" type="text"
                                required="" id="username" placeholder="." />
                            <label>Username</label>
                            <div className="b-line"></div>
                        </div>
                        {JSON.stringify(inp)}
                        {errors.usernameError}
                        <div className="password t-input">
                            <input onChange={handleChange} type="text" name="password" required=""
                                id="password" placeholder="." />
                            <label>Password</label>
                            <div className="b-line"></div>
                        </div>
                        <button type="submit">Log in</button>
                        <div><Link to="/Register">Creat New Acount</Link></div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;