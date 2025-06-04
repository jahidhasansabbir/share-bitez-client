import React from "react";
import { NavLink } from "react-router";

const FoodCard = ({ food }) => {
  const { foodName, foodQuantity, foodStatus , _id} = food;
//   console.log(foodImage);
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
        <p className="text-lg">Quantity: {foodQuantity}</p>
        <p className="text-lg">Status: {foodStatus}</p>
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

export default FoodCard;
