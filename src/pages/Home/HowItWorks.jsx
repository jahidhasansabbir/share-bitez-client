import React from 'react';

const HowItWorks = () => {
  return (
    <section className="">
      <div className=" text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-12">
          How Share Bite Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white rounded-3xl border p-8 hover:shadow-xl transform  transition-all duration-500">
            <img
              src="https://img.icons8.com/color/96/food.png"
              alt="Donate"
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Share Your Surplus
            </h3>
            <p className="text-gray-600 text-lg">
              List your extra food with details and pickup location to help someone in need.
            </p>
          </div>

          <div className="bg-white rounded-3xl border p-8 hover:shadow-xl transform  transition-all duration-500">
            <img
              src="https://img.icons8.com/color/96/helping-hand.png"
              alt="Request"
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Request a Meal
            </h3>
            <p className="text-gray-600 text-lg">
              Find available meals in your area and easily request what you need.
            </p>
          </div>

          <div className="bg-white rounded-3xl border p-8 hover:shadow-xl transform  transition-all duration-500">
            <img
              src="https://img.icons8.com/color/96/handshake.png"
              alt="Pickup"
              className="mx-auto mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Connect & Collect
            </h3>
            <p className="text-gray-600 text-lg">
              Meet the donor safely and pick up your meal — reducing waste together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
