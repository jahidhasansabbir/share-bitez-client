import React from 'react';
import FoodDetails from './FoodDetails';
// import useFoodDetails from '../../hooks/useFoodDetails';
import { useLoaderData} from 'react-router';

// const {foodDetails} = useFoodDetails()
const FoodDetailsContainer = () => {
    const data = useLoaderData();
    // const {id} = useParams()
    // const fPromise = fetch(`${import.meta.env.VITE_server}/food/${id}`)

    return (
        <div>
            <FoodDetails data={data}></FoodDetails>
        </div>
    );
};

export default FoodDetailsContainer;