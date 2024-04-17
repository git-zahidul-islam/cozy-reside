import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import userPhoto from '../../../public/otherIMG/user.png'

const Nav = () => {
    const { userLogOut, user } = useContext(AuthContext)
    // console.log("for kmow name", user)

    const navLink = <>
        <li><NavLink className={({isActive}) => isActive ? "text-white text-xl font-semibold bg-[#5755FE] px-3 py-2 border-r-4 border-r-[#FF55BB] rounded-md" : "text-xl font-semibold"} to={'/'}>Home</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-white text-xl font-semibold bg-[#5755FE] px-3 py-2 border-r-4 border-r-[#FF55BB] rounded-md" : "text-xl font-semibold"} to={'/updateProfile'}>Update Profile</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-white text-xl font-semibold bg-[#5755FE] px-3 py-2 border-r-4 border-r-[#FF55BB] rounded-md" : "text-xl font-semibold"} to={'/userProfile'}>User Profile</NavLink></li>
        <li><NavLink className={({isActive}) => isActive ? "text-white text-xl font-semibold bg-[#5755FE] px-3 py-2 border-r-4 border-r-[#FF55BB] rounded-md" : "text-xl font-semibold"} to={'/about'}>About Us</NavLink></li>
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
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-bold">Cozy <span className="text-[#08D9D6]">Reside</span></Link>
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
                                        <img alt="Tailwind CSS Navbar component" src={user ? user?.photoURL : userPhoto } />
                                    </div>
                                </div>
                                <div className="absolute invisible group-hover:visible bg-slate-500 p-2 z-50 w-36 -left-10 rounded-lg">
                                    <h1>{user && user.displayName }</h1>
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="px-3 py-2 bg-[#5755FE] text-white text-base font-medium">Logout</button>
                        </div>
                        :
                        <Link to={'/login'}><button className="px-3 py-2 bg-[#5755FE] text-white font-bold">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Nav;