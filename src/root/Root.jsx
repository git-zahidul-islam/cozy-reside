import { Outlet } from 'react-router-dom'
import Nav from '../components/nav/Nav';


const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto lg:px-2 md:px-2 px-4'>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;