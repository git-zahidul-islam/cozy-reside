import { useParams, useLoaderData } from 'react-router-dom'


const CardDetails = () => {
    const data = useLoaderData()
    const {id} = useParams()
    // console.log(data);

    


    return (
        <div>
            <h1>Card details</h1>
            {/* <p>{id}</p> */}
            <p>{id}</p>
        </div>
    );
};

export default CardDetails;