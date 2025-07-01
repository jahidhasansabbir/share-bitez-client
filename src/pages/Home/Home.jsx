import Navbar from "../../components/Navbar";
import Slider from "./Slider";
import FeaturedFood from "./FeaturedFood";
import HowItWorks from "./HowItWorks";
import SuccessStories from "./SuccessStories";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import { motion } from "motion/react";
import MissionImpact from "./MissionImpact";
const Home = () => {
  const { data: foods, isPending } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_server}/foods`);
      return res.json();
    },
  });
  if (isPending) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <motion.div initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}>
        <Slider></Slider>
      </motion.div>

      {/* <motion.div className='my-6'>
                <FeaturedFood foods={foods}></FeaturedFood>
            </motion.div> */}

      <motion.div
        className=""
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <FeaturedFood foods={foods} />
      </motion.div>
      <div className="">
        <HowItWorks></HowItWorks>
      </div>
      <div className="">
        <SuccessStories></SuccessStories>
      </div>
      <MissionImpact></MissionImpact>
    </div>
  );
};

export default Home;
