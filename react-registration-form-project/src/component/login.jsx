import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from  "./Headerfile";
import "./login.css";

const Login = () => {

  const [data, setdata] = useState({ username: "", password: "" });

  const localusername = localStorage.getItem("username");
  const localpassword = localStorage.getItem("password");

  const inputdata = (event) => {
    const { name, value } = event.target;
    setdata({ ...data, [name]: value });
  };

  const submitdata = (e) => {
    e.preventDefault();
    setdata({
      username: "", password: ""
    })
    //navigate to dashboard
    if (data.username === localusername && data.password === localpassword) {
      window.location.href = "https://console.firebase.google.com/project/querks-task/database/querks-task-default-rtdb/data"
    } else {
      const myElement = document.getElementById("error");
      myElement.style.color = "red";
      myElement.innerHTML = " Wrong Username & Password....! "
    }
  };

  return (
    <>
        <Header/>
      <div className='backbg'>
        <div className="login-container">
          <form method='Get'>
            <h1>Login</h1>
            <div className="username t-input">
              <label htmlFor="">Usename :-</label>
              <input
                placeholder="Username"
                type="text"
                name="username"
                value={data.username}
                onChange={inputdata}
              />
            </div>
            <div className="password t-input">
              <label htmlFor="">Password :-</label> <br />
              <input
                placeholder=" Password"
                type="password"
                name="password"
                value={data.password}
                onChange={inputdata}
              />
            </div>
            <p id="error" className="text-center" ></p>
            <div className="row">
              <button type="button" className='button' onClick={submitdata}>Login</button>
              <button className='button'><Link to={"/registration"}>Registration here</Link></button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
