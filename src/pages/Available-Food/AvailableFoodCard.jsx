import React from "react";
import { NavLink } from "react-router";

const AvailableFoodCard = ({ food }) => {
  const {
    foodName,
    foodQuantity,
    foodStatus,
    expireDate,
    _id,
    foodImage
  } = food;

  return (
    <div className="group relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col">
  <figure className="relative w-full h-64 overflow-hidden">
    <img
      src={foodImage}
      alt="Food"
      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute top-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md uppercase tracking-wider">
      {foodStatus}
    </div>
  </figure>

  <div className="flex flex-col flex-grow p-6 space-y-4">
    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
      {foodName}
    </h2>
    <div className="space-y-1">
      <p className="text-base text-gray-600">
        <span className="font-semibold text-gray-800">Quantity:</span> {foodQuantity}
      </p>
      <p className="text-base text-gray-600">
        <span className="font-semibold text-gray-800">Expire Date:</span> {expireDate}
      </p>
    </div>
    <div className="mt-auto">
  <NavLink to={`/food/${_id}`}>
    <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ">
      View Details
      <svg
        className="w-5 h-5 animate-pulse"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </NavLink>
</div>

  </div>
</div>

  );
};

export default AvailableFoodCard;
