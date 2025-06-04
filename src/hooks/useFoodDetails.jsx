import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useFoodDetailsApi = () => {
    const axiosSecure = useAxiosSecure();
    const foodDetailsPromise = (id)=>{
        return axiosSecure.get(`/requested-food/${id}`)
        .then(res=>res.data)
    }
    return {foodDetailsPromise}
}
export default useFoodDetailsApi;