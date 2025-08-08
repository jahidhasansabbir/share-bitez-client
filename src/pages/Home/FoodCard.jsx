import React from "react";
import { NavLink } from "react-router";

const FoodCard = ({ food }) => {
  const { foodName, foodQuantity, foodStatus , _id, foodImage} = food;
//   console.log(foodImage);
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500 group">
  <figure className="relative">
    <img
      src={foodImage}
      className="object-cover w-full h-[240px]"
      alt={foodName}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl"></div>
  </figure>
  <div className="p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{foodName}</h2>
    <p className="text-lg text-gray-600 mb-1">
      <span className="font-semibold text-gray-800">Quantity:</span> {foodQuantity}
    </p>
    <p className="text-lg text-gray-600">
      <span className="font-semibold text-gray-800">Status:</span> {foodStatus}
    </p>
    <div className="mt-6">
      <NavLink to={`/food/${_id}`}>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl py-3 transition-colors duration-300">
          View Details
        </button>
      </NavLink>
    </div>
  </div>
</div>

  );
};

export default FoodCard;
