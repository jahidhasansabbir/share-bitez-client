import React, { use, useState } from "react";
import FoodRow from "./FoodRow";
import Loading from "../../components/Loading";
import { FaRegSadTear } from "react-icons/fa";

const ManageMyFoods = ({ manageFoodPromise }) => {
  const filterFoods = use(manageFoodPromise);
  const [myFoods, setMyFoods] = useState(filterFoods);
  if (!filterFoods) {
    return <Loading></Loading>;
  }
  if (myFoods.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="bg-blue-100 text-blue-600 p-6 rounded-full shadow-lg mb-6 animate-bounce">
          <FaRegSadTear className="text-6xl" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-700">
          You haven't added any food yet!
        </h1>
        <p className="mt-2 text-gray-500 max-w-md">
          It looks like there's nothing here yet. Start by adding some items to
          get going!
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto py-8 bg-white min-h-screen">
      <h2 className="text-4xl text-center md:text-5xl mb-4 font-bold text-blue-600 ">
        Manage My Food
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
