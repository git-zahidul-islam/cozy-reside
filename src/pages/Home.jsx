import {useLoaderData} from 'react-router-dom'

import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Card from '../components/card/Card';
import { Helmet } from 'react-helmet-async';


const Home = () => {
    const allData = useLoaderData()
    // console.log(allData)


    return (
        <div className="space-y-8">
            <Helmet>
                <title>Cozy Reside | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className='space-y-6'>
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl font-bold text-center'>Estate List</h1>
                    <p className='text-center text-lg md:w-[600px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, cupiditate. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-10'>
                    {
                        allData.map(data => <Card key={data.id} details={data}></Card>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;