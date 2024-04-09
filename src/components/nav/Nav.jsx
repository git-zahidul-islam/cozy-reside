import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";



const Nav = () => {
    const { userLogOut, user } = useContext(AuthContext)
    // console.log("for kmow name", user)

    const navLink = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/updateProfile'}>Update Profile</NavLink></li>
        <li><NavLink to={'/userProfile'}>User Profile</NavLink></li>
    </>

    const handleLogOut = () => {
        userLogOut()
            .then(result => {
                console.log("successfully logout", result);
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <>
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-2xl font-bold">Cozy Reside</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    {
                        user ?
                            <div className="group relative">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <div className="invisible absolute -right-10 bg-slate-200 w-36 p-2 group-hover:visible z-20 h-36 rounded-lg border-2 border-green-300">
                                    <ul>
                                        <li>name is here</li>
                                        <li><button className="p-2 bg-red-600 rounded-lg" onClick={handleLogOut}>Logout</button></li>
                                    </ul>
                                </div>
                            </div>
                            :
                            <Link to={'/login'}>
                                <button className="px-3 py-2 bg-slate-500 ">login</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Nav;