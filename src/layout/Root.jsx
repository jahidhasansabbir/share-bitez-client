import React, { use } from 'react';
import '../App.css'
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import Loading from '../components/Loading';
const Root = () => {
    const {isLoading}=use(AuthContext);
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
           <div className='min-h-[84vh]'>
             <Outlet/>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;