
import { useLoaderData } from 'react-router';
import AvailableFoodCard from './AvailableFoodCard';
import { AuthContext } from '../../context/AuthContext';

const AvailableFood = () => {
    const data = useLoaderData();
    const availableFoods =data.data;
    return (
        <div className='w-11/12 mx-auto'>
            <h1>AvailableFood</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    availableFoods.map(food=><AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFood;