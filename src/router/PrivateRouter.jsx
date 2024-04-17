import { Navigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { DNA } from 'react-loader-spinner';



const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log("this is private router",location.pathname)

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[calc(100vh-180px)]'>
                <DNA
                    visible={true}
                    height="130"
                    width="130"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        )
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

PrivateRouter.propTypes = {
    children: PropTypes.object.isRequired
}
export default PrivateRouter;