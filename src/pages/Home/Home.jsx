import Navbar from '../../components/Navbar';
import Slider from './Slider';
import FeaturedFood from './FeaturedFood';
import HowItWorks from './HowItWorks';
import SuccessStories from './SuccessStories';
const foodPromise = fetch(`${import.meta.env.VITE_server}/foods`).then(res=>res.json())
const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            
            <div>
                <Slider></Slider>
            </div>
            <div className='my-6'>
                <FeaturedFood foodPromise={foodPromise}></FeaturedFood>
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