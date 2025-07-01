import React, { Suspense, use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { foodPromise } from "../../api/MyRequest";
import Loading from "../../components/Loading";
import MyFoodRequest from "./MyFoodRequest"

const MyFoodRequestContainer = () => {
  const { user } = use(AuthContext);
  return (
    <div className="py-8">
      <Suspense fallback={<Loading></Loading>}>
      <h2 className="text-4xl text-center md:text-5xl font-bold text-blue-600 mb-4 ">My Food Request
      </h2>
        <MyFoodRequest foodPromise={foodPromise(user?.email)}></MyFoodRequest>
      </Suspense>
    </div>
  );
};

export default MyFoodRequestContainer;
