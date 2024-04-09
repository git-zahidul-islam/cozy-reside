import { Link } from "react-router-dom";


const Card = ({ details }) => {
    const { id, image, price, status, location, description, estate_title, segment_name } = details

    return (
        <div>
            <div>
                <div className="h-64 relative">
                    <img className="h-full w-full" src={image} alt="" />
                    {/* <div className="bg-[url(/public/slider/slider1.jpg)] h-full bg-left-top">
                        </div> */}
                    <p className="absolute top-2">{status}</p>
                    <p className="absolute bottom-2">{price}</p>
                </div>
                <h1>{estate_title}</h1>
                <div className="flex justify-between">
                    <small>{location}</small>
                    <small>{segment_name}</small>
                </div>
                <hr className="border-[1px] border-dashed" />
                <p>{description.split(" ").slice(0, 10).join(" ") + " . . . . . ."}</p>
                <Link to={`/card/${id}`}><button className="p-2 bg-orange-400">view details</button></Link>
            </div>
        </div>
    );
};

export default Card;

// 