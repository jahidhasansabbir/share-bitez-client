import React from 'react';
import '../App.css'
import { Outlet } from 'react-router';
const Root = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Root;