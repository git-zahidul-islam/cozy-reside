// import bannerImage from './banner.css'

import Slider from "../slider/Slider";

const Banner = () => {
    return (
        <div className="mt-8 relative">
            <Slider></Slider>
            <div className="absolute md:top-[30%] top-10  md:left-8 left-6 z-10 text-white pr-2">
                <h1 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">Find Your Dream Home Today!</h1>
                <p className="mt-3 text-sm text-white sm:text-xl lg:text-2xl md:w-2/4">Discover the perfect property that suits your lifestyle and budget. Explore our vast selection of listings and turn your dream into reality.</p>
                <div className="mt-6">
                    <button href="#" className="inline-block bg-[#00AFEF] md:py-3 py-2 md:px-8 px-2 text-base font-semibold text-white rounded-lg">Start Your Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
