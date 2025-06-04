import React from 'react';
import '../App.css'
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Root = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;