import React from "react";

const FoodRow = ({ food }) => {
  const { foodName, foodQuantity, expireDate, pickupLocation, _id } = food;
  return (
    <tr>
      <td className="p-1">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{foodName}</div>
            <div className="text-sm opacity-50">{foodQuantity}</div>
          </div>
        </div>
      </td>
      <td className="p-1">{expireDate}</td>
      <td className="p-1">{pickupLocation}</td>
      <th className="flex flex-col gap-1 p-1">
        <button className="btn btn-ghost btn-xs bg-blue-700 text-white">Update</button>
        <button className="btn btn-ghost btn-xs bg-red-700 text-white">Delete</button>
      </th>
    </tr>
  );
};

export default FoodRow;
