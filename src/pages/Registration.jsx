import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import Lottie from 'react-lottie';
import animationData from '../../public/Animation/regestation.json'
import { MdOutlineDangerous } from "react-icons/md";
import { toast } from "react-toastify";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { updateProfile } from "firebase/auth";


const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()


    const handleReg = (e) => {
        e.preventDefault()
        // console.log(data.email);
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")
        const photo = form.get("photo_url")
        // console.log(name, email, password);

        if (password.length < 1) {
            setError('Type password')
            return;
        }
        if (password.length < 6) {
            setError('password minimum 6 character')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must have an Uppercase letter')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must have a Lowercase letter')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)

                // name & photo url
                updateProfile(result.user,{
                    displayName: name,
                    photoURL: photo,
                })
                .then(() => console.log("name and photo upload"))
                .catch(() => console.log("have error"))

                toast.success('Registration successful')
                setError()
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                toast.error('Already Use this email')
            })
    }
    // reg page svg
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="flex justify-center items-center mt-5">
            <Helmet>
                <title>Cozy Reside | Registration</title>
            </Helmet>
            <div className="lg:block md:block hidden">
                <Lottie
                    options={defaultOptions}
                    height={410}
                    width={450}
                >
                </Lottie>
            </div>
            <div className="flex-1 flex justify-center items-center ">
                <div className="w-full max-w-md p-8 space-y-3 bg-gray-200">
                    <h1 className="text-2xl font-bold text-center">Registration Page</h1>
                    <hr className="border-[1px] border-white" />
                    <form onSubmit={handleReg} className="space-y-6 px-3">
                        {
                            error &&
                            <div className="border-[1px] border-red-300 bg-red-100 p-2 flex gap-1">

                                <MdOutlineDangerous size={21} className="text-red-700 mt-[2px]" />
                                <div>
                                    <p>{error}</p>
                                </div>
                            </div>
                        }
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-400">Name</label>
                            <input

                                type="text" name="name" id="name" placeholder="Name" required className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-400">Photo url</label>
                            <input
                                type="text" name="photo_url" id="photo_url" placeholder="input photo url" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                            />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="username" className="block text-gray-400">Email</label>
                            <input
                                type="email" name="email" id="email" placeholder="email" required className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                            />
                        </div>
                        <div className="space-y-1 text-sm relative">
                            <label htmlFor="password" className="block text-gray-400">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-md  focus:border-violet-400 bg-white"
                            />
                            <span className="absolute right-8 top-8 text-[22px]" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <IoEyeSharp></IoEyeSharp>}
                            </span>
                        </div>
                        <button className="block w-full p-3 text-center rounded-sm text-white text-lg bg-[#00AFEF]">Register</button>
                    </form>
                    <p className="text-center">Already have account, <Link className="text-[#00afef] font-semibold" to={'/login'}>login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;