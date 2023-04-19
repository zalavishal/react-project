import React from 'react';
import Header from './commonComponent/02Headerfile';
import "./form/login.css";
// import CustomHooks from "./hooks/customHook";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const { handleChange, inp, errors } = CustomHooks({}, { usernameError: "", passwordError: "" })
    const saveFormData = () => {
        console.log("called", inp);
        fetch("http://localhost/API/registration", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inp),
        }).then((res) => res.json()).then((response) => {
            console.log(response);
            if (response.Code == 1) {
                navigate("/login")
            } else {
                alert("Error while inserting try after sometime")
            }
        })
    }
    return (
        <>
            <Header />
            <div className='backbg'>
                <div className="login-container">
                    <form>
                        <h1>Registration</h1>
                        <div className="username t-input">
                            <input onChange={handleChange} name="Fname" type="text" required="" id="username" placeholder="." />
                            <label>First Name</label>
                            <div className="b-line"></div>
                        </div>
                        <div className="username t-input">
                            <input onChange={handleChange} name="Lname" type="text" required="" id="username" placeholder="." />
                            <label>Last Name</label>
                            <div className="b-line"></div>
                        </div>
                        <div className="username t-input">
                            <input onChange={handleChange} name="email" type="mail" required="" id="email" placeholder="." />
                            <label>Email</label>
                            <div className="b-line"></div>
                        </div>
                        <div className="password t-input">
                            <input onChange={handleChange} type="text" name="password" required="" id="password" placeholder="." />
                            <label>Password</label>
                            <div className="b-line"></div>
                        </div>
                        <div className="password t-input">
                            <input onChange={handleChange} type="text" name="password" required="" id="password" placeholder="." />
                            <label>Confirm Password</label>
                            <div className="b-line"></div>
                        </div>
                        {JSON.stringify(inp)}
                        {errors.usernameError}
                        <button type='button' onClick={saveFormData}>Register</button>
                        <div><Link to="/">Home</Link></div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;