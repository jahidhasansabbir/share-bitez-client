import React from 'react';
import { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import FoodRow from './FoodRow';

const ManageMyFoods = () => {
    const foods = useLoaderData()
    const {user} = use(AuthContext);
    const myFoods = foods.filter(food=>food.donor.email==user.email)
    console.log(myFoods);
    return (
        <div className="overflow-x-auto w-11/12 mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className='p-1'>Food</th>
        <th className='p-1'>Expire Date</th>
        <th className='p-1'>Pickup Location</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        myFoods.map(food=><FoodRow key={food._id} food={food}></FoodRow>)
      }
    </tbody>
  </table>
</div>
    );
};

export default ManageMyFoods;