import React from "react";

const SuccessStories = () => {
  return (
    <div className=" bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Success Stories</h2>
      <div className="max-w-4xl mx-auto px-6">
        <p className="italic text-lg mb-6">
          “Thanks to ShareBite, I was able to share my extra Iftar meals with a
          nearby family during Ramadan. It felt amazing to help someone just a
          few blocks away.”
        </p>
        <p className="font-semibold">– Farzana, Donor from Dhaka</p>
        <hr className="my-6" />
        <p className="italic text-lg mb-6">
          “Being a university student, ShareBite has helped me get home-cooked
          meals when money was tight. It's a blessing.”
        </p>
        <p className="font-semibold">– Shakil, Student at DU</p>
      </div>
    </div>
  );
};

export default SuccessStories;
