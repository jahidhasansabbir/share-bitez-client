import React from 'react';
import { useLoaderData } from 'react-router';
import MyFoodRequestCard from './MyFoodRequestCard';

const MyFoodRequest = () => {
    
    const foods = useLoaderData()
    if(foods.length===0){
      return <div className='flex w-11/12 max-w-[350px] mx-auto justify-center items-center min-h-[50vh]'>
        <h1 className='text-3xl font-bold'>You don't request for food yet!</h1>
      </div>
    }
    // {foods.length 0? console.log('hi'):console.log('bye')}
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6'>
           {
             foods.map(food=><MyFoodRequestCard key={food._id} food={food}></MyFoodRequestCard>)
           }
        </div>
    );
};

export default MyFoodRequest;