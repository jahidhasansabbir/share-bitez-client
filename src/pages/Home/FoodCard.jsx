import React from "react";

const FoodCard = ({ food }) => {
  const { foodName, foodQuantity, foodStatus } = food;
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
      </div>
    </div>
  );
};

export default FoodCard;
