import React from 'react';

const HowItWorks = () => {
    return (
        <div className="py-10 bg-gray-50 text-center">
  <h2 className="text-3xl font-bold mb-6">How It Works</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
    <div>
      <img src="https://img.icons8.com/color/96/food.png" alt="Donate" className="mx-auto mb-4"/>
      <h3 className="text-xl font-semibold">1. Donate Food</h3>
      <p>Post surplus food items with details and pickup info.</p>
    </div>
    <div>
      <img src="https://img.icons8.com/color/96/helping-hand.png" alt="Request" className="mx-auto mb-4"/>
      <h3 className="text-xl font-semibold">2. Request a Meal</h3>
      <p>Browse available food and send a request in one click.</p>
    </div>
    <div>
      <img src="https://img.icons8.com/color/96/handshake.png" alt="Pickup" className="mx-auto mb-4"/>
      <h3 className="text-xl font-semibold">3. Pickup & Share</h3>
      <p>Connect with the donor and collect your meal easily.</p>
    </div>
  </div>
</div>
    );
};

export default HowItWorks;