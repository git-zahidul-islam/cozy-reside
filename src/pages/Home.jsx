import { useLoaderData } from 'react-router-dom'
import Banner from "../components/banner/Banner";
import Card from '../components/card/Card';
import { Helmet } from 'react-helmet-async';
import BestPlace from '../components/BestPlace/BestPlace';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accordion from '../components/accordion/Accordion';
AOS.init();


const Home = () => {
    const allData = useLoaderData()
    // console.log(allData)


    return (
        <div className="space-y-8">
            <Helmet>
                <title>Cozy Reside | Home</title>
            </Helmet>
            <Banner></Banner>
            <BestPlace></BestPlace>
            <div className='space-y-6'>
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-delay="150"
                    data-aos-duration="1000"

                    className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold text-center'>Our All <span className='text-[#00AFEF]'>Property</span> List</h1>
                    <p className='text-center text-lg md:w-[600px]'>You can get all types of houses of your choice from us at affordable prices. So why delay booked now</p>
                </div>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        allData.map(data => <Card key={data.id} details={data}></Card>)
                    }
                </div>
            </div>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;