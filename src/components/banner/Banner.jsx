// import bannerImage from './banner.css'

import Slider from "../slider/Slider";

const Banner = () => {
    return (
        // <div className="max-w-7xl h-[650px]" style={{ backgroundImage: 'url(/banner.png)' }}>
        //     <div className="md:flex justify-between items-center h-full">
        //         {/* <div>
        //             <h1 className="text-4xl font-bold text-white">Your Dream home is here <br /> Check It</h1>
        //         </div> */}
        //         <div className=" border-2 ">
        //             <Slider></Slider>
        //         </div>
        //     </div>
        // </div>

        <div className="mt-5">
            <Slider></Slider>
        </div>
    );
};

export default Banner;
