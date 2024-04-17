import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { IoIosArrowDropright } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const SliderDetails = ({ data }) => {
    const { estate_title, segment_name, location, id } = data
    return (
        <div>
            <div className="bg-[#0a0a0ad9] text-white">
                <div className="lg:p-4 md:p-4 p-2">
                    <h1 className="md:text-xl font-semibold">{estate_title}</h1>
                    <p className="flex gap-1 items-center text-[#00AFEF]"><CiLocationOn size={21} />{location}</p>
                </div>
            </div>
            <div className="flex">
                {/* <p className="bg-[#00AFEF] p-4">{status}</p> */}
                <p className="text-white font-medium lg:px-4 md:px-4 px-2 lg:py-[18px] md:py-[18px] py-2 bg-[#00AFEF]">{segment_name}</p>
                <Link className="lg:p-4 md:p-4 p-2 bg-white" to={`/card/${id}`}><IoIosArrowDropright size={30} /></Link>
            </div>
        </div>
    );
};

SliderDetails.propTypes = {
    data: PropTypes.object.isRequired
}
export default SliderDetails;