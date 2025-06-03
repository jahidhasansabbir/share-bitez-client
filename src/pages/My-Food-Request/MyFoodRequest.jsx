import React from 'react';
import { useLoaderData } from 'react-router';
import MyFoodRequestCard from './MyFoodRequestCard';

const MyFoodRequest = () => {
    
    const foods = useLoaderData()
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6'>
           {
             foods.map(food=><MyFoodRequestCard key={food._id} food={food}></MyFoodRequestCard>)
           }
        </div>
    );
};

export default MyFoodRequest;