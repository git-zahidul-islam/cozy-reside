import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";




const ErrorElement = () => {
    const error = useRouteError()

    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-2">
            <Helmet>
                <title>Cozy Reside | Error</title>
            </Helmet>
            <h1 className="text-2xl font-semibold">404</h1>
            <p className="text-3xl text-red-500 font-bold">
                {error.statusText || error.message}
            </p>
            <Link to={'/'} className="bg-[#00AFEF] p-2 rounded-md text-white">Home</Link>
        </div>
    );
};

export default ErrorElement;