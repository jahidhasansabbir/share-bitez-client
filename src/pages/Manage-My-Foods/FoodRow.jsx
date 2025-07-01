import axios from "axios";
import React from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const FoodRow = ({ food, setMyFoods, myFoods }) => {
  const { foodName, foodImage, foodQuantity, expireDate, pickupLocation, _id } = food;

  const handleDeleteFood = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingMyFoods = myFoods.filter(
          (singleFood) => singleFood._id != _id
        );
        setMyFoods(remainingMyFoods);
        axios.delete(`${import.meta.env.VITE_server}/delete/${_id}`).then(() => {});
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <tr className="hover">
      <td className="px-0">
        <div className="flex items-center gap-4">
          <div className="avatar">
            <div className="mask mask-squircle w-14 h-14">
              <img src={foodImage} alt={foodName} />
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-800">{foodName}</div>
            <div className="text-sm text-gray-500">Quantity: {foodQuantity}</div>
          </div>
        </div>
      </td>
      <td className="px-0 text-gray-700">{expireDate}</td>
      <td className="px-0 text-gray-700">{pickupLocation}</td>
      <td className="px-0">
        <div className="flex flex-col gap-2">
          <NavLink to={`/update/${_id}`}>
            <button className="btn btn-xs bg-blue-600 hover:bg-blue-700 border-0 text-white w-full">
              Update
            </button>
          </NavLink>
          <button
            onClick={handleDeleteFood}
            className="btn btn-xs border-0 bg-red-600 hover:bg-red-700 text-white w-full"
          >
            Delete
          </button>
          
        </div>
      </td>
    </tr>
  );
};

export default FoodRow;
