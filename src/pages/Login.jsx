import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import Lottie from 'react-lottie';
import { MdOutlineDangerous } from "react-icons/md";
import animationData from '../../public/Animation/Animation - 1712975389596.json'
import { toast } from "react-toastify";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { userLogin, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = (data) => {
        const { email, password } = data;
        console.log(email, password)

        userLogin(email, password)
            .then(result => {
                console.log("login successfully", result)
                navigate(location?.state ? location.state : '/')
                toast.success('Login successfully')
                setError()
            })
            .catch(error => {
                console.error(error);
                setError('Invalid password')
            })
    }
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log("google login successfully", result.user)
                toast.success('Login successfully')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGithubLogin = () => {
        loginWithGithub()
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
                toast.success('Login successfully')
            })
            .catch(error => {
                console.error(error);
            })
    }

    // login page svg
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <div className="flex justify-center items-center lg:mt-16 md:mt-8 mt-5">
            <Helmet>
                <title>Cozy Reside | Login</title>
            </Helmet>
            <div className="lg:block md:block hidden">
                <Lottie
                    options={defaultOptions}
                    height={450}
                    width={500}
                >
                </Lottie>
            </div>
            <div className=" w-full max-w-md p-8 space-y-3 bg-gray-200">
                <h1 className="text-2xl font-bold text-center">Login</h1>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 px-3">
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
                        <label htmlFor="username" className="block text-gray-400">Email</label>
                        <input
                            {...register("email", { required: true })}
                            type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm relative">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input
                            {...register("password", { required: true })}
                            type={showPassword ? "text" : "password"}
                            name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md  focus:border-violet-400 bg-white"
                        />
                        <span className="absolute right-8 top-8 text-[22px]" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <IoEyeSharp></IoEyeSharp>}
                        </span>
                        {errors.password && <span className="text-red-500">This field is required</span>}
                        <div className="flex justify-end text-xs text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-white text-lg bg-[#00AFEF]">Login</button>
                </form>
                <p className="text-sm text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link className="text-[#00AFEF] font-semibold" to={'/registration'}> Register</Link>
                </p>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-black"></div>
                    <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-black"></div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={handleGoogleLogin}
                        aria-label="Login with Google" type="button" className="flex items-center justify-center p-4 space-x-4 border rounded-md bg-[#00afef48] hover:scale-105 transition-all w-14 h-14"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>

                    </button>
                    <button
                        onClick={handleGithubLogin}
                        aria-label="Login with GitHub" role="button" className="flex items-center justify-center  p-4 space-x-4 border rounded-md  bg-[#00afef48] hover:scale-105 transition-all w-14 h-14"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github"><path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path></svg>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;