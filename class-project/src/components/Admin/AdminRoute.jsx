import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
// import { Navigate } from "react-router-dom";
import AdminDashboard from './AdminDashboard.jsx';
import AdminProfile from './AdminProfile.jsx';
import AdminAllUsers from './allusers';
import AdminMainContant from './AdminDashboardMainContent';
import EditUser from './edituser.jsx';


class AdminRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    {/* <Route path="admin/admindashboard" element={<AdminDashboard />} /> */}
                    <Route path="/" element={<AdminDashboard />} >
                        <Route path="profile" element={<AdminProfile />} ></Route>
                        <Route path="allusers" element={<AdminAllUsers />} ></Route>
                        <Route path="AdminMainContant" element={<AdminMainContant />} ></Route>
                        <Route path="edituser/:userId" element={<EditUser />} ></Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default AdminRoute;
