import React, { Suspense, use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { foodPromise } from "../../api/MyRequest";
import Loading from "../../components/Loading";
import MyFoodRequest from "./MyFoodRequest"

const MyFoodRequestContainer = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <MyFoodRequest foodPromise={foodPromise(user.email)}></MyFoodRequest>
      </Suspense>
    </div>
  );
};

export default MyFoodRequestContainer;
