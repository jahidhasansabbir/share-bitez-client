import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const AddFood = () => {
  const {user} = use(AuthContext);
  const {displayName, photoURL, email} = user;
  const donor = { name: displayName , email: email, image: photoURL };
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const pickupLocation = form.pickupLocation.value;
    const foodQuantity = form.foodQuantity.value;
    const foodImage = form.foodImage.value;
    const expireDate = form.expireDate.value;
    const additionalNotes = form.additionalNotes.value;
    const foodStatus = "available";
    const food = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expireDate,
      additionalNotes,
      donor,
      foodStatus,
    };
    axios.post(`${import.meta.env.VITE_server}/foods`, food)
      .then((res) => {
        if(res.data.insertedId){
            food._id=res.data.insertedId;
            form.reset();
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto my-8">
      <form className="fieldset" onSubmit={handleAddFood}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="label">Food Name</label>
            <input
              required
              type="text"
              name="foodName"
              className="input w-full"
              placeholder="e.g: Cup-cake"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Food Image</label>
            <input
              required
              type="text"
              name="foodImage"
              className="input w-full"
              placeholder="Please enter photoURL"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Food Quantity</label>
            <input
              required
              type="text"
              name="foodQuantity"
              className="input w-full"
              placeholder="Enter food quantity"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Pickup Location</label>
            <input
              type="text"
              required
              name="pickupLocation"
              className="input w-full"
              placeholder="Enter pickup location"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Expired Date</label>
            <input
              type="date"
              required
              name="expireDate"
              className="input w-full"
              placeholder="Select date and time"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="label">Additional Notes</label>
          <textarea
            className="textarea h-24 w-full"
            name="additionalNotes"
            required
            placeholder="Describe..."
          ></textarea>
        </div>
        <button className="btn btn-neutral mt-4">Add</button>
      </form>
    </div>
  );
};

export default AddFood;
