import React from "react";
import { NavLink } from "react-router";

const AvailableFoodCard = ({ food }) => {
  const {
    foodName,
    foodQuantity,
    foodStatus,
    expireDate,
    pickupLocation,
    _id,
  } = food;

 
  return (
    <div className="card bg-white shadow-xl rounded-2xl ">
      <figure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Food"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {foodStatus}
        </div>
      </figure>
      <div className="card-body space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">{foodName}</h2>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Quantity:</span>{" "}
          {foodQuantity}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Expire Date:</span>{" "}
          {expireDate}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Pickup Location:</span>{" "}
          {pickupLocation}
        </p>
       
        <div className="mt-4 text-right">
          <NavLink to={`/food/${_id}`}>
            <button className="btn btn-primary bg-blue-700 px-5 rounded-full border-none text-white">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;
