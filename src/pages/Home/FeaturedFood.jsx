import React from 'react';
import FoodCard from './FoodCard';
import { NavLink } from 'react-router';

const FeaturedFood = ({foods}) => {
    return (
        <div>
            <h1 className='text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center'>Featured Foods</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {foods?.map(food=><FoodCard key={food._id} food={food}></FoodCard>)}
            </div>
            <div className='text-center mt-8'>
                <NavLink to='/available-foods'><button className='btn btn-primary border-none bg-blue-700  text-white'>Show All</button></NavLink>
            </div>
        </div>
    );
};

export default FeaturedFood;