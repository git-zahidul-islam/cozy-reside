import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FaAnglesRight } from "react-icons/fa6";
import { CiBookmarkPlus } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Card = ({ details }) => {
    const { id, image, price, status, description, estate_title, segment_name, area } = details

    return (
        <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
        >
            <div className="shadow-md bg-white">
                <div className="h-64">
                    <img className="h-full w-full" src={image} alt="" />
                </div>
                <div className="px-3 space-y-2 py-3">
                    <h1 className="text-lg font-semibold">{estate_title}</h1>
                    <h4 className="italic text-gray-500">{segment_name}, {area}</h4>
                    <h1 className="text-xl text-red-500">{price} <span className="text-gray-400">{status === 'rent' && "/month"}</span></h1>
                    <p>{description.split(" ").slice(0, 10).join(" ") + " . . . . . ."}</p>
                    <div className="flex justify-between">
                        <Link to={`/card/${id}`}><button className="p-2 bg-[#65B741] text-white flex items-center gap-2"><span className="text-base font-semibold">View Details</span><FaAnglesRight></FaAnglesRight></button></Link>
                        <p className="flex items-center gap-1 text-lg">{status} <CiBookmarkPlus className="text-[#00AFEF] bg-slate-100 w-8 h-8 p-1" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    details: PropTypes.object.isRequired
}
export default Card;