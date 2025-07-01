import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData, useNavigate, useParams } from "react-router";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expireDate,
    additionalNotes,
  } = useLoaderData();
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const pickupLocation = form.pickupLocation.value;
    const foodQuantity = form.foodQuantity.value;
    const foodImage = form.foodImage.value;
    const expireDate = form.expireDate.value;
    const additionalNotes = form.additionalNotes.value;
    const food = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expireDate,
      additionalNotes,
    };
    axios
      .patch(`${import.meta.env.VITE_server}/update/${id}`, food)
      .then(() => {
        navigate(-1)
      });
  };
  return (
    <div className=" max-w-[720px] mx-auto my-8">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12 text-center">Update Food</h1>
      <form className="fieldset" onSubmit={handleAddFood}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="label">Food Name</label>
            <input
              defaultValue={foodName}
              required
              type="text"
              name="foodName"
              className="input w-full border-1"
              placeholder="e.g: Cup-cake"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Food Image</label>
            <input
              required
              defaultValue={foodImage}
              type="text"
              name="foodImage"
              className="input w-full border-1"
              placeholder="Please enter photoURL"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Food Quantity</label>
            <input
              defaultValue={foodQuantity}
              required
              type="text"
              name="foodQuantity"
              className="input w-full border-1"
              placeholder="Enter food quantity"
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Pickup Location</label>
            <input
              type="text"
              required
              defaultValue={pickupLocation}
              name="pickupLocation"
              className="input w-full border-1"
              placeholder="Enter pickup location"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="label">Expired Date</label>
          <input
            type="date"
            required
            defaultValue={expireDate}
            name="expireDate"
            className="input w-full border-1"
            placeholder="Select date and time"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="label">Additional Notes</label>
          <textarea
            className="textarea h-24 w-full border-1"
            name="additionalNotes"
            required
            defaultValue={additionalNotes}
            placeholder="Describe..."
          ></textarea>
        </div>
        <button className="btn btn-neutral border-none bg-blue-600 mt-4">Add</button>
      </form>
    </div>
  );
};

export default Update;
