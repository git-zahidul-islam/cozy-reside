import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";



const Registration = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { createUser } = useContext(AuthContext)


    const handleReg = (data) => {
        const { name, email, password } = data
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <div className="flex justify-center items-center h-[calc(100vh-68px)]">
                <div className="w-full max-w-md p-8 space-y-3 bg-gray-200">
                    <h1 className="text-2xl font-bold text-center">Registration Page</h1>
                    <hr className="border-[1px] border-white" />
                    <form onSubmit={handleSubmit(handleReg)} className="space-y-6 px-3">
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