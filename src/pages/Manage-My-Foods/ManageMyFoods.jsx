import React from 'react';
import { use } from 'react';
import FoodRow from './FoodRow';
import { useState } from 'react';

const ManageMyFoods = ({manageFoodPromise}) => {
  
  const filterFoods = use(manageFoodPromise)
    const [myFoods, setMyFoods] = useState(filterFoods);
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
        myFoods.map(food=><FoodRow myFoods={myFoods} setMyFoods={setMyFoods} key={food._id} food={food}></FoodRow>)
      }
    </tbody>
  </table>
</div>
    );
};

export default ManageMyFoods;