import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import logo from '../../../public/otherIMG/logo.png'

const Nav = () => {
    const { userLogOut, user } = useContext(AuthContext)
    const navLink = <>
        <li><NavLink className={({isActive}) => isActive ? "text-[#00AFEF] text-xl font-semibold px-3 py-2 rounded-md" : "text-xl font-semibold"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-[#00AFEF] text-xl font-semibold px-3 py-2 rounded-md" : "text-xl font-semibold"} to={'/updateProfile'}>Update Profile</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-[#00AFEF] text-xl font-semibold px-3 py-2 rounded-md" : "text-xl font-semibold"} to={'/userProfile'}>User Profile</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-[#00AFEF] text-xl font-semibold px-3 py-2 rounded-md" : "text-xl font-semibold"} to={'/about'}>About Us</NavLink></li>
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
        <div className="navbar bg-base-100 p-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="flex gap-3 flex-col dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-bold lg:w-8/12 md:w-8/12 w-52">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5 menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center gap-2">
                            <div className="relative group">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" 
                                        src={user.photoURL ? user.photoURL : "../../../public/otherIMG/user.png"} />
                                    </div>
                                </div>
                                {
                                    user.displayName &&
                                    <div className="absolute invisible group-hover:visible bg-[#49c3f0d0] p-2 z-50 w-36 -left-10 rounded-lg">
                                        <h1 className="text-white text-lg">{user && user.displayName}</h1>
                                    </div>
                                }
                            </div>
                            <button onClick={handleLogOut} className="px-3 py-2 bg-[#00afefbc] text-white text-base font-medium">Logout</button>
                        </div>
                        :
                        <Link to={'/login'}><button className="px-3 py-2 bg-[#00AFEF] text-white font-bold">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Nav;