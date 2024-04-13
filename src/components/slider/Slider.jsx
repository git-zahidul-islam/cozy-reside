import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '/styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import sliderImage1 from '../../../public/slider/slider1.jpg'
import sliderImage2 from '../../../public/slider/slider2.jpg'
import sliderImage3 from '../../../public/slider/slider3.jpg'


const Slider = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-xl"
            >
                <SwiperSlide>
                    <div className='relative  lg:h-[650px] h-4/5'>
                        <img className='h-full w-full object-fill' src={sliderImage1} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <h1 className='text-red-600 text-2xl'>slide 01</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative  lg:h-[650px] h-4/5'>
                        <img className='h-full w-full object-fill' src={sliderImage2} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <h1 className='text-red-600 text-2xl'>slide 2</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative  lg:h-[650px] h-4/5'>
                        <img className='h-full w-full object-fill' src={sliderImage3} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <h1 className='text-red-600 text-2xl'>slide 03</h1>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative  lg:h-[650px] h-4/5'>
                        <img className='h-full w-full object-fill' src={sliderImage3} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <h1 className='text-red-600 text-2xl'>slide 04</h1>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;