import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './login';
import Registration from './registration';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} ></Route>
                <Route path='/registration' element={<Registration />} ></Route>
            </Routes>
        </>
    );
};

export default Router;