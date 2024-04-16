import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import deafultIMG from '../../public/otherIMG/defaultIMG.jpg'


const UpdateProfile = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { profileUpdate, setUser, user } = useContext(AuthContext)
    console.log(user);

    const handleUpdate = (data) => {
        const { name, email, photo_url } = data;
        console.log(name, email, photo_url);

        profileUpdate(name, photo_url)
            .then(() => {
                setUser({ displayName: name, photo_url: photo_url })
                console.log('profile update');
            })
            .catch()

    }

    return (
        <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-4 mt-16">
            <Helmet>
                <title>Cozy Reside | Update Profile</title>
            </Helmet>
            {/* user update show */}
            <div className="flex flex-col items-center gap-4 border-2 p-4 border-[#00AFEF] md:w-5/12 min-h-96">
                <h1 className="text-2xl font-bold">Updated Data</h1>
                <div className="w-36 h-36">
                    <img className="rounded-full h-full w-full" src={user ? user.photoURL : deafultIMG} alt="photo" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-black text-center">Name: {user?.displayName}</h3>
                    <h3 className="text-lg">Email: {user?.email}</h3>
                </div>
            </div>

            {/* update part */}
            <div className="lg:w-5/12 md:w-5/12 w-8/12 min-h-96 space-y-3 p-4 bg-[#2124229C] border-2">
                <h1 className="text-2xl font-bold text-center text-white py-2">Update Data</h1>
                <form onSubmit={handleSubmit(handleUpdate)} className="space-y-6 px-3">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-base text-black font-semibold">Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text" name="name" id="name" placeholder={user ? user?.displayName : 'name'} className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-base text-black font-semibold">Photo url</label>
                        <input
                            {...register("photo_url")}
                            type="text" name="photo_url" id="photo_url" placeholder="input photo url" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                        />
                    </div>
                    {/* <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-base text-black font-semibold">Email</label>
                        <input
                            {...register("email", { required: true })}
                            type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div> */}
                    <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">Update</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;