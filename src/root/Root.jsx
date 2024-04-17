import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav';
import Footer from '../components/footer/Footer';


const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto '>
                <Nav></Nav>
                <div className='lg:px-2 md:px-2 px-4 mb-5 min-h-[60vh]'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;