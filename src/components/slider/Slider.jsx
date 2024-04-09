import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '/styles.css';

import { Autoplay,Pagination, Navigation } from 'swiper/modules';

// import sliderImage1 from '../../../public/slider/slider1.jpg'
// import sliderImage2 from '../../../public/slider/slider2.jpg'
// import sliderImage3 from '../../../public/slider/slider3.jpg'


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
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper h-[70vh] w-full"
            >
                <SwiperSlide>
                    <div className='bg-[url(/public/slider/slider1.jpg)] h-screen'>
                        <h1>bdsfliwfiuwghfig</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(/public/slider/slider2.jpg)] h-screen'>
                        <h1>bdsfliwfiuwghfig</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(/public/slider/slider3.jpg)] h-screen'>
                        <h1>bdsfliwfiuwghfig</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[url(/public/slider/slider4.png)] h-screen'>
                        <h1>bdsfliwfiuwghfig</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;