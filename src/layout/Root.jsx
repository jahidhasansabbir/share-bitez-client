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
        <div className=''>
        <Navbar></Navbar>
           <div className='max-w-[1600px] mx-auto w-11/12 min-h-[84vh]'>
             <Outlet/>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;