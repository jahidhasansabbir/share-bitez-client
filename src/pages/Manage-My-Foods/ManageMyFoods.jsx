import React, { use, useState } from "react";
import FoodRow from "./FoodRow";

const ManageMyFoods = ({ manageFoodPromise }) => {
  const filterFoods = use(manageFoodPromise);
  const [myFoods, setMyFoods] = useState(filterFoods);

  if (myFoods.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen ">
        <h1 className="text-3xl font-semibold text-gray-700">
          You haven't added any food yet!
        </h1>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto py-8 bg-white min-h-screen">
      <h2 className="text-4xl text-center md:text-5xl mb-4 font-bold text-blue-600 ">Manage My Food
      </h2>

      <table className="table w-full table-zebra text-gray-800">
        {/* head */}
        <thead className=" text-blue-800">
          <tr>
            <th className="py-3 px-0 text-left">Food</th>
            <th className="py-3 px-0 text-left">Expire Date</th>
            <th className="py-3 px-0 text-left">Pickup Location</th>
            <th className="py-3 px-0 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {myFoods?.map((food) => (
            <FoodRow
              myFoods={myFoods}
              setMyFoods={setMyFoods}
              key={food._id}
              food={food}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMyFoods;
