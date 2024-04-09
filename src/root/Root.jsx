import {Outlet} from 'react-router-dom'
import Nav from '../components/nav/Nav';


const Root = () => {
    return (
        <div className='max-w-7xl mx-auto lg:px-0 md:px-1 px-4'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;