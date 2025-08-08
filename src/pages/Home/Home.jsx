import Navbar from "../../components/Navbar";
import Slider from "./Slider";
import FeaturedFood from "./FeaturedFood";
import HowItWorks from "./HowItWorks";
import SuccessStories from "./SuccessStories";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import { motion } from "motion/react";
import MissionImpact from "./MissionImpact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Home = () => {
  const { data: foods, isPending } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_server}/foods`);
      return res.json();
    },
  });
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: false,    
    offset: 100,    
  });
}, []);

  if (isPending) {
    return <Loading />;
  }

  return (
    <div className="mt-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 md:mb-16 lg:mb-20"
      >
        <Slider />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-10 md:mb-16 lg:mb-20"
        data-aos="fade-right"
      >
        <FeaturedFood foods={foods}/>
      </motion.div>

      <div className="mb-10 md:mb-16 lg:mb-20" data-aos="fade-left">
        <HowItWorks />
      </div>

      <div className="mb-10 md:mb-16 lg:mb-20" data-aos="fade-up">
        <SuccessStories />
      </div>

      <div className="mb-10 md:mb-16 lg:mb-20" data-aos="fade-right">
        <MissionImpact />
      </div>
    </div>
  );
};

export default Home;
