import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import Lottie from 'react-lottie';
import animationData from '../../public/Animation/regestation.json'
import { MdOutlineDangerous } from "react-icons/md";
import { toast } from "react-toastify";



const Registration = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { createUser } = useContext(AuthContext)
    const [error,setError] = useState(null)


    const handleReg = (data) => {
        // console.log(data.email);
        const { name, email, password } = data
        // console.log(name, email, password)
        
        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)){
            setError('Type valid email address')
            return;
        }
        if (!/^[a-zA-Z0-9._%+-]{6,}@gmail\.com$/.test(email)) {
            setError("minimum 6 char, ex- example@gmail.com")
            return;
        }
        if(password.length < 6){
            setError('password minimum 6 character')
            return;
        }
        if (!/[A-Z]/.test(password)){
            setError('Password must have an Uppercase letter')
            return;
        }
        if (!/[a-z]/.test(password)){
            setError('Password must have a Lowercase letter')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success('Registration successful')
                setError()
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
                    height={450}
                    width={500}
                >
                </Lottie>
            </div>
            <div className="flex-1 flex justify-center items-center ">
                <div className="w-full max-w-md p-8 space-y-3 bg-gray-200">
                    <h1 className="text-2xl font-bold text-center">Registration Page</h1>
                    <hr className="border-[1px] border-white" />
                    <form onSubmit={handleSubmit(handleReg)} className="space-y-6 px-3">
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
                                {...register("name", { required: true })}
                                type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                            />
                            {errors.name && <span className="text-red-500">This field is required</span>}
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
                                {...register("email", { required: true })}
                                type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                            />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-400">Password</label>
                            <input
                                {...register("password", { required: true })}
                                type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  focus:border-violet-400 bg-white"
                            />
                            {errors.password && <span className="text-red-500">This field is required</span>}
                            <div className="flex gap-2 items-center">
                                <input

                                    type="checkbox" name="check" id="check" />
                                <p>Accept Term & condition</p>

                            </div>
                        </div>

                        <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Register</button>
                    </form>
                    <p className="text-center">Already have account, <Link className="text-purple-600" to={'/login'}>login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;