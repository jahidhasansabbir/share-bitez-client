import React from 'react';
import '../App.css'
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Root;