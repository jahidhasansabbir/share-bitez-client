import { useLoaderData } from "react-router";
import AvailableFoodCard from "./AvailableFoodCard";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { motion } from "motion/react";
const AvailableFood = () => {
  const data = useLoaderData();
  const [toggle, setToggle] = useState(false);
  const availableFoods = data.data;
  const [search,setSearch]= useState('')
  const searchFoods = availableFoods.filter(food=>food.foodName.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-2xl font-bold text-center">Available Food</h1>
      {/* search-bar */}
      <div className="flex justify-center items-center gap-1">
        <label className="input bg-[#80808018] w-full my-4">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow " placeholder="Search" onChange={(e)=>setSearch(e.target.value)} />
      </label>
      </div>


      <div
        onClick={() => setToggle(!toggle)}
        className="hidden lg:flex justify-center mb-4"
      >
        <button className="btn bg-blue-700 text-white">change layout</button>
      </div>


      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`grid grid-cols-1 md:grid-cols-2 ${
          toggle ? "lg:grid-cols-2" : "lg:grid-cols-3"
        } gap-6`}
      >
        {searchFoods.map((food) => (
          <AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>
        ))}
      </motion.div>
    </div>
  );
};

export default AvailableFood;
