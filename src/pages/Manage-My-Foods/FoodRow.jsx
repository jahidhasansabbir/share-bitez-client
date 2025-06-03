import axios from "axios";
import React from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";

const FoodRow = ({ food, setMyFoods, myFoods}) => {
  const { foodName, foodQuantity, expireDate, pickupLocation, _id } = food;
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
          const remainingMyFoods = myFoods.filter(singleFood=>singleFood._id!=_id)
          setMyFoods(remainingMyFoods)
          axios.delete(`${import.meta.env.VITE_server}/delete/${_id}`)
            .then(() => {});
          Swal.fire({
            title: "Deleted!",
            text: "Your post has been deleted.",
            icon: "success",
          });
        }
      });
    };
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
        <button className="btn btn-ghost btn-xs bg-blue-700 text-white">
          <NavLink to={`/update/${_id}`}>Update</NavLink>
        </button>
        <button onClick={handleDeleteFood} className="btn btn-ghost btn-xs bg-red-700 text-white">
          Delete
        </button>
      </th>
    </tr>
  );
};

export default FoodRow;
