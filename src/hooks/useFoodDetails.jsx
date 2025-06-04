import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useFoodDetails = () => {
    const axiosSecure = useAxiosSecure();
    const foodDetails = (id)=>{
        return axiosSecure.get(`/food/${id}`)
        .then(res=>res.data)
    }
    return {foodDetails}
}
export default useFoodDetails;