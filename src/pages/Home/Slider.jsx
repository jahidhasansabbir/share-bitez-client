import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider1 from "../../assets/slider-1.png";
import slider2 from "../../assets/slider-2.png";
import slider3 from "../../assets/slider-3 .png";
const Slider = () => {
  return (
    <div className="mx-auto">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
      >
        <SwiperSlide>
          <div className="relative z-20">
            <img
              className="h-[180px] w-full md:h-[350px] lg:h-[500px] rounded-lg object-cover"
              src={slider1}
              alt=""
            />
            <div className="absolute inset-0 flex px-2  bg-[#0803037c] rounded-lg items-center justify-center text-center text-white z-40">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold"><i>“Share more than food. Share love.”</i>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-20">
            <img
              className="h-[180px] w-full md:h-[350px] lg:h-[500px] rounded-lg object-cover"
              src={slider2}
              alt=""
            />
            <div className="absolute inset-0 flex px-2  bg-[#0803037c] rounded-lg items-center justify-center text-center text-white z-40">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                <i>“One extra plate can feed a soul.”</i>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative z-20">
            <img
              className="h-[180px] w-full md:h-[350px] lg:h-[500px] rounded-lg object-cover"
              src={slider3}
              alt=""
            />
            <div className="absolute inset-0 flex px-2  items-center bg-[#0803037c] rounded-lg  justify-center text-center text-white z-40">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                <i>“Cooked with care. Shared with love.”</i>
              </h1>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Slider;
