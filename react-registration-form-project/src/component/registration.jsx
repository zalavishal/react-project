import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Headerfile";
import CustomHooks from "./hook/customHook";
import "./login.css";

const Registration = () => {
  const navigate = useNavigate()
  const { handleChange, inp, errors } = CustomHooks({}, { usernameError: "", emailError: "", numberlError: "", passwordError: "" })

  const saveFormData = (event) => {
    event.preventDefault()
    if (inp.username === "" && inp.password === "") {
      localStorage.setItem("username01", inp.username);
      localStorage.setItem("password02", inp.password);
    } else {
      localStorage.setItem("username", inp.username);
      localStorage.setItem("password", inp.password);
    }
    const payload = JSON.stringify(inp);
    const res = fetch(
      "https://querks-task-default-rtdb.firebaseio.com/userDataRecord.json",
      {
        method: "POST",
        Headers: {
          "Content-Type": "application/json",
        },
        body: payload,
      }
    ).then((res)=>res.json()).then((result)=>{ 
      navigate("/")
    });
  }

  return (
    <>
      <Header />
      <div className="backbg">
        <div className="login-container">
          <form>
            <h1>Registration for Login</h1>
            <div className="login-row">
              <div>
                <div className="t-input">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleChange}
                    value={inp.username}
                  />
                </div>
                <p className="error">{errors.usernameError}</p>
                <div className="t-input">
                  <label>Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={inp.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="t-input">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    required=""
                    id="email"
                    value={inp.email}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </div>
                <p className="error">{errors.emailError}</p>
                <div className="t-input">
                  <label>Mobile Number</label>
                  <input
                    name="number"
                    type="number"
                    value={inp.number}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </div>
                <p className="error">{errors.numberlError}</p>
                <div className="t-input">
                  <label>Date Of Birth</label>
                  <input
                    name="Dob"
                    type="date"
                    value={inp.Dob}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <div className="t-input">
                  <label>City</label>
                  <input
                    name="City"
                    type="text"
                    value={inp.City}
                    onChange={handleChange}
                  />
                </div>
                <div className="t-input">
                  <label>State</label>
                  <input
                    name="state"
                    type="text"
                    value={inp.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="t-input">
                  <label>Country</label>
                  <input
                    name="Country"
                    type="text"
                    value={inp.Country}
                    onChange={handleChange}
                  />
                </div>
                <div className="t-input">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={inp.password}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </div>
                <p className="error">{errors.passwordError}</p>
                <div className="t-input">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="ConfirmPassword"
                    value={inp.ConfirmPassword}
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <button
                type="submit"
                id="submit"
                className="button"
                onClick={saveFormData}
              >
                Submit
              </button>
              <button className="button">
                <Link to={"/"}>Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;