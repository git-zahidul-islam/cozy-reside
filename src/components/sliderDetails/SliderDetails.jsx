import { Link } from "react-router-dom";
import { IoIosArrowDropright } from "react-icons/io";

const SliderDetails = ({data}) => {
    const { estate_title, segment_name,location, id }= data
    return (
        <div>
            <div className="bg-[#0a0a0ad9] text-white">
                <div className="p-4">
                    <h1 className="text-xl font-semibold">{estate_title}</h1>
                    <p>{location}</p>
                </div>
            </div>
            <div className="flex">
                {/* <p className="bg-[#00AFEF] p-4">{status}</p> */}
                <p className="text-white font-medium p-4 bg-[#00AFEF]">{segment_name}</p>
                <Link className="p-4 bg-white" to={`/card/${id}`}><IoIosArrowDropright size={30} /></Link>
            </div>
        </div>
    );
};

export default SliderDetails;