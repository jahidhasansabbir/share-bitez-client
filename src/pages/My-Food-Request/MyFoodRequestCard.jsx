import React from 'react';

const MyFoodRequestCard = ({food}) => {
    const {foodName, donor, pickupLocation, expireDate, requestedDate}=food;
    return (
        <div className="card bg-white shadow-xl rounded-2xl ">
      <figure className="relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Food"
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">{foodName}</h2>
        
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Donor Name:</span>{" "}
          {donor.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Pickup Location:</span>{" "}
          {pickupLocation}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Expire Date:</span>{" "}
          {expireDate}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Request Date:</span>{" "}
          {requestedDate}
        </p>
       
      </div>
    </div>
    );
};

export default MyFoodRequestCard;