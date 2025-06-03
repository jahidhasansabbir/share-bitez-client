import Navbar from '../../components/Navbar';
import Slider from './Slider';
import FeaturedFood from './FeaturedFood';
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
        </div>
    );
};

export default Home;