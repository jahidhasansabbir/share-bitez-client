import React, { use } from 'react';
import FoodCard from './FoodCard';
import { NavLink } from 'react-router';

const FeaturedFood = ({foodPromise}) => {
    const foods = use(foodPromise)
    return (
        <div>
            <h1 className='text-2xl md:text-4xl font-bold mb-4'>Featured Foods</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {foods.map(food=><FoodCard key={food._id} food={food}></FoodCard>)}
            </div>
            <div className='text-center my-4'>
                <NavLink to='/available-foods'><button className='btn bg-blue-700 text-white'>Show All</button></NavLink>
            </div>
        </div>
    );
};

export default FeaturedFood;