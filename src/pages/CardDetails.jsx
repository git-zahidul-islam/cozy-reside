import { Helmet } from 'react-helmet-async';
import { useParams, useLoaderData } from 'react-router-dom'
import { FaBattleNet } from "react-icons/fa";


const CardDetails = () => {
    const { id } = useParams()
    const numId = parseInt(id)
    const allData = useLoaderData()
    const data = allData.find(item => item.id === numId)
    const { estate_title, image, segment_name,
        description, price, status, area, location, facilities
    } = data;



    return (
        <div className='flex flex-col items-center justify-center'>
            <Helmet>
                <title>{estate_title.slice(0, 20)} . . .</title>
            </Helmet>
            <div className='flex lg:flex-row md:flex-row flex-col items-center justify-between gap-2 md:w-10/12 w-full bg-[#FFF7FC] border-b-8 border-b-[#8B93FF]'>
                <div className='w-1/8'>
                    <h1 className='text-red-400 font-semibold text-3xl ml-9'>{price}</h1>
                </div>
                <div className='w-7/8 h-[450px]'>
                    <img className='w-full h-full' src={image} alt="" />
                </div>
            </div>
            <div className='md:w-10/12 w-full bg-[#5755FE] p-4 text-white'>
                <h1 className='text-xl font-medium'>{estate_title}</h1>
                <p className='text-base'>Category: {segment_name}</p>
                <p>{location}</p>
                <p>{area}</p>
            </div>
            <div className='md:w-10/12 w-full lg:h-14 md:h-14 h-56 flex lg:flex-row md:flex-row flex-col items-center'>
                <h1 className='bg-[#FFF7FC] lg:w-2/12 md:w-2/12 w-full lg:h-full md:h-full h-1/4 p-3 text-center text-red-500 text-2xl'>{status}</h1>
                <div className='bg-[#8B93FF] flex-1 lg:w-10/12 md:w-10/12 w-full flex gap-5 items-center h-full p-3'>
                    <p className='flex items-center gap-2 text-lg italic'><FaBattleNet className='text-white'></FaBattleNet>Facilities</p>
                    <div className='flex lg:flex-row md:flex-row flex-col gap-2'>
                        <p>1. {facilities[0]}</p>
                        <p>2. {facilities[1]}</p>
                        <p>3. {facilities[2]}</p>
                    </div>
                </div>
            </div>
            <div className='md:w-10/12 w-full'>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;