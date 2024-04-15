import { Helmet } from 'react-helmet-async';
import { useParams, useLoaderData } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";


const CardDetails = () => {
    const { id } = useParams()
    const numId = parseInt(id)
    const allData = useLoaderData()
    const data = allData.find(item => item.id === numId)
    const { estate_title, image, segment_name,
        description, price, status, area, location, facilities
    } = data;



    return (
        <div className=''>
            <Helmet>
                <title>{estate_title.slice(0, 20)} . . .</title>
            </Helmet>
            <div className='h-[550px] w-full flex lg:flex-row md:flex-col flex-col gap-4 justify-between md:items-center bg-[#f2f4f7]'>
                <img className='w-full h-full' src={image} alt="banner image" />
                {/* <div className='lg:w-4/12 md:w-full w-full space-y-5'>
                    <div className='border-l-4 ps-2 main-border'>
                        <p className='text-lg font-medium'>Category</p>
                        <p className='font-bold text-gray-500'>{segment_name}</p>
                    </div>
                    <div className='border-l-4 ps-2 main-border'>
                        <h3 className='text-lg font-medium'>Facilities</h3>
                        <div className='flex gap-2 font-bold text-gray-500'>
                            <p>{facilities[0]}</p>
                            <p>{facilities[1]}</p>
                            <p>{facilities[2]}</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='mt-5'>
                <div>
                    <h1 className='text-start text-3xl font-bold text-[#00072D]'>{estate_title}</h1>
                    <p className='flex items-center gap-2 text-[#54595F] text-lg'><CiLocationOn className='main-text'></CiLocationOn>{location}</p>
                </div>
            </div>
            <div className='flex justify-around gap-3 bg-amber-300 py-4 -rotate-2 mt-8'>
                <div className='border-l-4 ps-2 main-border'>
                    <p className='text-lg font-medium'>Category</p>
                    <p className='font-bold text-gray-500'>{segment_name}</p>
                </div>
                <div className='border-l-4 ps-2 main-border'>
                    <h3 className='text-lg font-medium'>Facilities</h3>
                    <div className='flex gap-2 font-bold text-gray-500'>
                        <p>{facilities[0]}</p>
                        <p>{facilities[1]}</p>
                        <p>{facilities[2]}</p>
                    </div>
                </div>
            </div>
            <div className='shadow-xl mt-5 mb-5 p-4 space-y-2 rounded-md'>
                <h1 className='text-lg text-[#00072D] font-semibold'>Property Description</h1>
                <hr />
                <div className='flex gap-2'>
                    <p className='p-2 border-[1px] main-border rounded-lg'>{price}</p>
                    <p className='p-2 border-[1px] main-border rounded-lg'>{status}</p>
                </div>
                <p className='leading-7'>{description}</p>
            </div>
            <div className='h-[450px]'>
                <h1>here will have more img</h1>
            </div>
            <div className='w-full flex-col flex justify-center items-center bg-sky-100 mb-5 py-6'>
                <img className='w-20' src="/public/otherIMG/mail-icon.svg" alt=""/>
                <div className='space-y-5'>
                    <div>
                        <h3 className='text-2xl font-bold text-[#00072D] text-center'>Subscribe for Update</h3>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Debitis.</p>
                    </div>
                    <div className="join">
                        <input className="input input-bordered join-item rounded-l-full md:w-80 border-0" placeholder="Email" />
                        <button className="btn join-item rounded-r-full bg-[#00AFEF]">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;