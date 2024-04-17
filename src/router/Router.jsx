import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";
import CardDetails from "../pages/CardDetails";
import PrivateRouter from "./PrivateRouter";
import ErrorElement from "../pages/ErrorElement";
import About from "../pages/About";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: 'card/:id',
                element: <PrivateRouter><CardDetails></CardDetails></PrivateRouter>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/updateProfile',
                element: <PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>
            },
            {
                path: '/userProfile',
                element: <PrivateRouter><UserProfile></UserProfile></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/about',
                element: <PrivateRouter><About></About></PrivateRouter>
            }
        ]
    }
])