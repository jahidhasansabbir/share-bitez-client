import React, { Suspense, use } from 'react';
import ManageMyFoods from './ManageMyFoods';
import { manageFoodPromise } from '../../api/ManageMyFoodApi';
import { AuthContext } from '../../context/AuthContext';
import Loading from '../../components/Loading';

const ManageMYFoodsContainer = () => {
const {user}= use(AuthContext);
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
            <ManageMyFoods manageFoodPromise = {manageFoodPromise(user?.email)}></ManageMyFoods>
      </Suspense>
        </div>
    );
};

export default ManageMYFoodsContainer;