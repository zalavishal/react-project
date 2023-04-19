import React, { useState } from 'react';

const CustomHooks = (intval, initErro) => {
    const [inp, setInput] = useState(intval)
    const [errors, setError] = useState(initErro)
    const handleChange = (e) => {
        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        console.log("called from hook");
        if (e.target.name == "username") {
            if (e.target.value == "") {
                setError({ ...errors, "usernameError": "User Name is required" })
            } else {
                setError({ ...errors, "usernameError": "" })
            }
        } else if (e.target.name == "email") {
            let Pattern = /^[a-zA-Z0-9]+$/
            if (Pattern.test(e.target.value)) {
                setError({ ...errors, "emailError": "User Name is required" })
            } else {
                setError({ ...errors, "emailError": "" })
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