import React from 'react';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Home;