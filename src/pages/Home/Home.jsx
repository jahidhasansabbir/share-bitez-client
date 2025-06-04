import Navbar from '../../components/Navbar';
import Slider from './Slider';
import FeaturedFood from './FeaturedFood';
import HowItWorks from './HowItWorks';
import SuccessStories from './SuccessStories';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading';

const Home = () => {
    const {data: foods, isPending} =useQuery({
        queryKey: ['foods'],
        queryFn: async ()=>{
            const res = await fetch(`${import.meta.env.VITE_server}/foods`);
            return res.json();
        }
    })
    if(isPending){
        return <Loading></Loading>
    }
    return (
        <div className='w-11/12 mx-auto'>
            
            <div>
                <Slider></Slider>
            </div>
            <div className='my-6'>
                <FeaturedFood foods={foods}></FeaturedFood>
            </div>
            <div className='my-10'>
                <HowItWorks></HowItWorks>
            </div>
            <div className='mb-12'>
                <SuccessStories></SuccessStories>
            </div>
        </div>
    );
};

export default Home;