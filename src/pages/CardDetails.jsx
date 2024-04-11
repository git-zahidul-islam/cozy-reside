import { Helmet } from 'react-helmet-async';
import { useParams, useLoaderData } from 'react-router-dom'


const CardDetails = () => {
    const { id } = useParams()
    const numId = parseInt(id)
    const allData = useLoaderData()
    const data = allData.find(item => item.id === numId)
    const { estate_title, image, segment_name,
        description, price, status, area, location, facilities
    } = data;



    return (
        <div>
            <Helmet>
                <title>{estate_title.slice(0,20)} . . .</title>
            </Helmet>
            <h1>{estate_title}</h1>
            <div className='w-96 h-80 border-2'>
                <img className='h-full' src={image} alt="" />
            </div>
        </div>
    );
};

export default CardDetails;