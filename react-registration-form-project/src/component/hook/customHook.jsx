import React, { useState } from 'react';

const CustomHooks = (intval, initError) => {
    const [inp, setInput] = useState(intval)
    const [errors, setError] = useState(initError)
    const handleChange = (e) => {
      
        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setError({ ...errors, "usernameError": "User Name is required" })
            } else {
                setError({ ...errors, "usernameError": "" })
            }
        } else if (e.target.name == "email") {
            let Pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if (e.target.value == "") {
                setError({ ...errors, "emailError": "Email is required" })
            } else {
                console.log("inside else", e.target.value);
                if (Pattern.test(e.target.value)) {
                    setError({ ...errors, "emailError": "Invalid Email format" })
                } else {
                    setError({ ...errors, "emailError": "" })
                }
                setError({ ...errors, "emailError": "" })
            }
        } else if (e.target.name == "number") {
            let Pattern = /^[0-9\b]+$/;
            if (e.target.value == "") {
                setError({ ...errors, "number": "number is required" })
            } else {
                console.log("inside else", e.target.value);
                if (Pattern.test(e.target.value)) {
                    setError({ ...errors, "numberlError": "Invalid number format" })
                } else {
                    setError({ ...errors, "numberlError": "" })
                }
                setError({ ...errors, "numberlError": "" })
            }
        } else if (e.target.name == "password") {
            if (e.target.value == "") {
                setError({ ...errors, "password": "password is required" })
            } else {
                console.log("inside else", e.target.value);
                setError({ ...errors, "passwordError": "" })
            }
        }
    }
    return {
        inp,
        handleChange,
        errors
    };
};

export default CustomHooks;