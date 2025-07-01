import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { TbSoup } from "react-icons/tb";
import { PiUsersFourFill } from "react-icons/pi";
import { IoFastFood } from "react-icons/io5";

const MissionImpact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const [countKey, setCountKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setCountKey((k) => k + 1);
    }
  }, [inView]);

  return (
    <div ref={ref} className="text-center px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12">
        Our Mission & Impact
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
        At Share Bite, our mission is to fight hunger and reduce food waste by
        connecting generous donors with neighbors in need. Every meal shared
        builds a stronger, more compassionate community.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center">
          <TbSoup className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            {inView ? (
              <CountUp key={`count1-${countKey}`} end={25000} duration={3} separator="," />
            ) : (
              "0"
            )}
            +
          </h3>
          <p className="text-lg text-gray-700">Meals shared since launch</p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center">
          <PiUsersFourFill className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            {inView ? (
              <CountUp key={`count2-${countKey}`} end={15000} duration={3} separator="," />
            ) : (
              "0"
            )}
            +
          </h3>
          <p className="text-lg text-gray-700">
            Families helped in communities across Bangladesh
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center">
          <IoFastFood className="text-blue-600 text-6xl mb-4" />
          <h3 className="text-3xl font-bold text-blue-600 mb-4">
            {inView ? (
              <CountUp key={`count3-${countKey}`} end={10} duration={3} />
            ) : (
              "0"
            )}{" "}
            Tons
          </h3>
          <p className="text-lg text-gray-700">Food saved from going to waste</p>
        </div>
      </div>
    </div>
  );
};

export default MissionImpact;
