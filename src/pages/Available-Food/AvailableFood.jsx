import React from 'react';
import { useLoaderData } from 'react-router';
import AvailableFoodCard from './AvailableFoodCard';

const AvailableFood = () => {
    const data = useLoaderData();
    const availableFoods =data.data;
    console.log(availableFoods);
    return (
        <div>
            <h1>AvailableFood</h1>
            <div>
                {
                    availableFoods.map(food=><AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;