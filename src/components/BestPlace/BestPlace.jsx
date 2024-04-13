import { FaMapMarkedAlt } from "react-icons/fa";
import sliderImage1 from '../../../public/slider/slider1.jpg'
import sliderImage2 from '../../../public/slider/slider2.jpg'
import sliderImage3 from '../../../public/slider/slider3.jpg'
import 'animate.css';

const BestPlace = () => {
    return (
        <div className="bg-[#F6F5F2] py-10 px-0 md:rounded-tl-[250px] rounded-tl-[150px] md:rounded-br-[250px] rounded-br-[150px] border-l-4 border-[#5755FE]">
            <div className="flex items-center justify-center gap-5">
                <hr className="w-3/12 border-[1px] border-[#65B741]"/>
                <FaMapMarkedAlt size={32} className="text-[#08D9D6]"></FaMapMarkedAlt>
                <hr className="w-3/12 border-[1px] border-[#65B741] " />
            </div>
            <div className="mt-5">
                <h1 className="text-center text-3xl font-bold">Top 3 <span className=" text-[#8B93FF]">Rented</span> Property</h1>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-5 mt-10">
                <div className="lg:w-3/12 md:w-3/12 w-8/12 h-full border-[5px] border-green-300"><img className="transition-all hover:scale-110 hover:rounded-lg" src={sliderImage1} alt="" /></div>
                <div className="lg:w-2/12 md:w-2/12 w-8/12 h-full border-[5px] border-green-300"><img className="transition-all hover:scale-110 hover:rounded-lg" src={sliderImage2} alt="" /></div>
                <div className="lg:w-2/12 md:w-2/12 w-8/12 h-full border-[5px] border-green-300"><img className="transition-all hover:scale-110 hover:rounded-lg" src={sliderImage3} alt="" /></div>
            </div>
        </div>
    );
};

export default BestPlace;