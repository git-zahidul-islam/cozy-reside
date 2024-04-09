import {useParams} from 'react-router-dom'


const CardDetails = () => {
    const {id} = useParams()
    console.log(id)


    return (
        <div>
            <h1>Card details</h1>
        </div>
    );
};

export default CardDetails;