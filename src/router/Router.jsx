import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import UpdateProfile from "../pages/UpdateProfile";
import UserProfile from "../pages/UserProfile";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            }
        ]
    }
])