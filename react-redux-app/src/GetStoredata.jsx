import React from 'react';
import Header from './commonComponent/02Headerfile';
import { useSelector } from 'react-redux';
import { selectUser } from "./reducer/users";
const GetStoreData = () => {
    const users = useSelector(selectUser);
    return (
        <div>
            <Header/>
            {JSON.stringify(users)}
            home page data
        </div>
    );
};

export default GetStoreData;