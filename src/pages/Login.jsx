import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { userLogin } = useContext(AuthContext)

    const handleLogin = (data) => {
        const { email, password } = data;
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                console.log("login successfully",result)

            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="flex justify-center items-center h-[calc(100vh-68px)]">
            <div className="w-full max-w-md p-8 space-y-3 bg-gray-200">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <hr className="border-[1px] border-white" />
                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6 px-3">
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
                        <div className="flex justify-end text-xs text-gray-400">
                            <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Sign in</button>
                </form>
                <p className="text-sm text-center sm:px-6 dark:text-gray-600">Don't have an account?
                    <Link className="text-purple-500" to={'/registration'}> Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;