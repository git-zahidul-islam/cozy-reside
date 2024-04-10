import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";

const UpdateProfile = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { profileUpdate } = useContext(AuthContext)

    const handleUpdate = (data) => {
        const { name, email, photo_url } = data;
        console.log(name,email,photo_url);
        profileUpdate({
            
        })
    }

    return (
        <div className="flex justify-center items-center mt-10">
            <div className="w-full max-w-md p-8 space-y-3 bg-gray-200 rounded-tr-[80px]">
                <form onSubmit={handleSubmit(handleUpdate)} className="space-y-6 px-3">
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
                            {...register("photo_url")}
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
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Register</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;