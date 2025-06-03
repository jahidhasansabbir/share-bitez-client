
import { useLoaderData } from 'react-router';
import AvailableFoodCard from './AvailableFoodCard';
import { AuthContext } from '../../context/AuthContext';

const AvailableFood = () => {
    const data = useLoaderData();
    const availableFoods =data.data;
    return (
        <div>
            <h1>AvailableFood</h1>
            <div>
                {
                    availableFoods.map(food=><AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;