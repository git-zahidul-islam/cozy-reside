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
import sliderImage4 from '../../../public/slider/slider4.png'
import sliderImage5 from '../../../public/slider/slider5.jpg'
import sliderImage6 from '../../../public/slider/slider6.jpg'

import { useEffect, useState } from 'react';
import SliderDetails from '../sliderDetails/SliderDetails';


const Slider = () => {
    const [data,setData] = useState([])


    useEffect(()=>{
        fetch("/public/data.json")
        .then(res => res.json())
        .then(currentData => setData(currentData))
    },[])

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
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            {/* <h1 className='text-red-600 text-2xl'>slide 01</h1> */}
                            <div>
                            {
                                    data.slice(0, 1).map(allData => <SliderDetails key={allData.id} data={allData}></SliderDetails>)
                            }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage2} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <div>
                                {
                                    data.slice(1, 2).map(allData => <SliderDetails key={allData.id} data={allData}></SliderDetails>)
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage3} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <div>
                                {
                                    data.slice(2, 3).map(allData => <SliderDetails key={allData.id} data={allData}></SliderDetails>)
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage4} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <div>
                                {
                                    data.slice(3, 4).map(allData => <SliderDetails key={allData.id} data={allData}></SliderDetails>)
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage5} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <div>
                                {
                                    data.slice(4, 5).map(allData => <SliderDetails key={allData.id} data={allData}></SliderDetails>)
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative  lg:h-[650px] md:h-[600px] h-[350px]'>
                        <img className='h-full w-full object-fill' src={sliderImage6} alt="" />
                        <div className='absolute flex justify-center items-center w-full h-full top-[1px]'>
                            <div>
                                {
                                    data.slice(5, 6).map(allData => <SliderDetails key={allData.id} data={allData}></SliderDetails>)
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;