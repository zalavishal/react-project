import React, { useLayoutEffect } from 'react';
import Header from './commonComponent/02Headerfile';
import { useDispatch } from 'react-redux';
import { retriveUsers } from './actions/users';

const HomePage = () => {
    const dispatch = useDispatch ()
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
        getUsers()
    })
    async function getUsers(){
        let respo = await dispatch (retriveUsers())
    }
    return (
        <div>
            <Header/>
          HomePage  
        </div>
    );
};

export default HomePage;