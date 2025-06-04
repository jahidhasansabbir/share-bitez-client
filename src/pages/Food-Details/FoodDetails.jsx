import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import axios from "axios";
// import { NavLink } from "react-router";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
const FoodDetails = ({data}) => {
  const { user } = use(AuthContext);

  const {
    foodName,
    foodQuantity,
    foodStatus,
    expireDate,
    pickupLocation,
    additionalNotes,
    donor,
    foodImage,
    _id,
  } = data
  const img = foodImage
    
  const handleRequest = () => {
    const bangladeshTime =  new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Dhaka' });

    Swal.fire({
      title: `<strong>Request Food</strong>`,
      html: `
     <div style="text-align: left; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
     <div style="text-align:center; margin-bottom: 1rem;">
       <img src="${img}" alt="Food Image" style="width: 100%; height: 230px; object-fit: cover;  border-radius: 8px;  box-shadow: 0 2px 8px rgba(0,0,0,0.15);" />
     </div>
    <p style="font-weight: 600; font-size: 1.1rem; margin-bottom: 0.25rem;"><b>Food Name:</b> <span style="font-weight: 400;">${foodName}</span></p>
    <p style="margin: 0.25rem 0;"><b>Food ID:</b> <span style="font-weight: 400;">${_id}</span></p>
    <p style="margin: 0.25rem 0;"><b>Donor Email:</b> <span style="font-weight: 400;">${donor.email}</span></p>
    <p style="margin: 0.25rem 0;"><b>Donor Name:</b> <span style="font-weight: 400;">${donor.name}</span></p>
    <p style="margin: 0.25rem 0;"><b>User Email:</b> <span style="font-weight: 400;">${user?.email}</span></p>
    <p style="margin: 0.25rem 0;"><b>User Name:</b> <span style="font-weight: 400;">${user.displayName}</span></p>
    <p style="margin: 0.25rem 0;"><b>Request Date:</b> <span style="font-weight: 400;">${bangladeshTime}</span></p>
    <p style="margin: 0.25rem 0;"><b>Pickup Location:</b> <span style="font-weight: 400;">${pickupLocation}</span></p>
    <p style="margin: 0.25rem 0;"><b>Expire Date:</b> <span style="font-weight: 400;">${expireDate}</span></p>
    <label for="notes" style="font-weight: 600; margin-top: 1rem; display: block;">Additional Notes:</label>
    <textarea id="notes" class="" placeholder="Write your note here..." style=" min-height: 80px;width:100%; font-size: 1rem; padding: .5rem; margin-top:8px;  border-radius: 6px; border: 1px solid #ccc; ;">${additionalNotes}</textarea>
  </div>
    `,
      showCancelButton: true,
      confirmButtonText: "Request",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const notes = Swal.getPopup().querySelector("#notes").value;
        console.log(notes);
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const foodStatus = "requested"
        const requestedDate = bangladeshTime;
        const requestedEmail= user.email;
        axios.patch(`${import.meta.env.VITE_server}/food/${_id}`, {foodStatus, requestedDate, requestedEmail})
        .then(res=>console.log(res.data))
      }
    });
  };

  return (
    <div className="card bg-white shadow-xl rounded-2xl w-11/12 mx-auto my-10">
      <figure className="relative">
        <img
          src={foodImage}
          alt="Food"
          className="w-full h-72 object-cover"
        />
        <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {foodStatus}
        </div>
      </figure>
      <div className="card-body space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">{foodName}</h2>
        <div className="divider my-1"></div>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Quantity:</span>{" "}
          {foodQuantity}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Expire Date:</span>{" "}
          {expireDate}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Location:</span>{" "}
          {pickupLocation}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Additional Note:</span>{" "}
          {additionalNotes}
        </p>
        <div className="divider my-1"></div>
        <img src={donor.image} alt="" />
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Donor Name:</span>{" "}
          {donor.name}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-gray-700">Donor Email:</span>{" "}
          {donor.email}
        </p>

        <div className="mt-4 text-right">
          <button
            onClick={handleRequest}
            className="btn btn-primary bg-blue-700 px-5 rounded-full border-none text-white"
          >
            Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
