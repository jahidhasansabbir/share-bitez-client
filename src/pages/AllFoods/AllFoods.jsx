import { NavLink, useLoaderData } from "react-router"; 
import { motion } from "framer-motion"; 
import Loading from "../../components/Loading";

const AllFoods = () => {
  const data = useLoaderData();
  console.log(data);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="my-8">
      <h2 className="text-4xl text-center md:text-5xl font-bold text-blue-600 mb-4">Available Foods
      </h2>

      {/* Table Wrapper with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="overflow-x-auto"
      >
        <table className="table w-full table-zebra text-gray-800 bg-white">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th>#</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Expire Date</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data.data.map((food, index) => (
              <tr key={food._id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{food.foodName}</td>
                <td>{food.foodQuantity}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      food.foodStatus === "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {food.foodStatus}
                  </span>
                </td>
                <td>{food.expireDate}</td>
                <td>
                  <NavLink to={`/food/${food._id}`}>
                    <button className="btn btn-sm rounded-md border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Details
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default AllFoods;
