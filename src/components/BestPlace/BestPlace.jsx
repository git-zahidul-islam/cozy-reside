import { FaMapMarkedAlt } from "react-icons/fa";
import sliderImage1 from '../../../public/slider/slider1.jpg'
import sliderImage2 from '../../../public/slider/slider2.jpg'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const BestPlace = () => {
    return (
        <div className="bg-[#ffd1e33c] py-10 px-0 md:rounded-tl-[50px] rounded-tl-[30px] border-l-4 border-[#5755FE]">
            <div className="flex items-center justify-center gap-5">
                <hr className="w-3/12 border-[1px] border-[#65B741]" />
                <FaMapMarkedAlt size={32} className="text-[#08D9D6]"></FaMapMarkedAlt>
                <hr className="w-3/12 border-[1px] border-[#65B741] " />
            </div>
            <div className="mt-5">
                <h1 className="text-center md:text-3xl text-xl font-bold">Top 02 <span className=" text-[#00AFEF]">Rented</span> Property</h1>
            </div>
            <div className="flex justify-center items-center gap-2 mt-5">
                <div
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"

                    className="lg:w-3/12 md:w-3/12 w-5/12 h-full border-[5px] border-green-300"><img className="transition-all hover:scale-110 hover:rounded-lg" src={sliderImage1} alt="" /></div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"

                    className="lg:w-2/12 md:w-2/12 w-4/12 h-full border-[5px] border-green-300"><img className="transition-all hover:scale-110 hover:rounded-lg" src={sliderImage2} alt="" /></div>
            </div>
        </div>
    );
};

export default BestPlace;