import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useRequestFood = () => {
    const axiosSecure = useAxiosSecure();
    const reqFood = ()=>{
        return axiosSecure.get(`/requested-food`)
        .then(res=>res.data)
    }
    return {reqFood}
}
export default useRequestFood;