import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// import '/styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import sliderImage1 from '../../../public/slider/slider1.jpg'
import sliderImage2 from '../../../public/slider/slider2.jpg'
import sliderImage3 from '../../../public/slider/slider3.jpg'
import sliderImage4 from '../../../public/slider/slider4.png'
import sliderImage5 from '../../../public/slider/slider5.jpg'
import sliderImage6 from '../../../public/slider/slider6.jpg'

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
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage1} alt="" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage2} alt="" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage3} alt="" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage4} alt="" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage5} alt="" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative  lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage6} alt="" />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;