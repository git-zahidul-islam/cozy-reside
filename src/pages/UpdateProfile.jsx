import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthProvider";
import { Helmet } from "react-helmet-async";
import defaultIMG from '../../public/otherIMG/user.png'
import { toast } from "react-toastify";


const UpdateProfile = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const { profileUpdate, setUser, user } = useContext(AuthContext)
    

    const [name, setName] = useState(user?.displayName || '')
    const [email, setEmail] = useState(user?.email || '')
    const [photo, setPhoto] = useState(user?.photoURL || '')

    const handleUpdate = (data) => {
        const { name, photo_url } = data;
        

        profileUpdate(name, photo_url)
            .then(() => {
                setUser({ ...user,displayName: name, photoURL: photo_url })
                console.log('profile update');
                toast.success("Profile Update Successful")
            })
            .catch()

    }

    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center items-center gap-4 mt-16">
            <Helmet>
                <title>Cozy Reside | Update Profile</title>
            </Helmet>
            {/* user update show */}
            <div className="flex flex-col items-center gap-4 border-2 p-4 border-[#00AFEF] min-h-[435px] rounded-md">
                <h1 className="text-2xl font-bold">Updated Data</h1>
                <div className="w-36 h-36">
                    <img className="rounded-full h-full w-full" src={user.photoURL ? user.photoURL : defaultIMG} alt="photo" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-black text-center">Name: {user?.displayName}</h3>
                    <h3 className="text-lg">Email: {user?.email}</h3>
                </div>
            </div>

            {/* update part */}
            <div className="min-h-[435px] space-y-3 p-4 bg-[#00afef81] rounded-md">
                <h1 className="text-2xl font-bold text-center text-white py-2">Update Data</h1>
                <form onSubmit={handleSubmit(handleUpdate)} className="space-y-6 px-3">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-base text-black font-semibold">Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={user?.displayName || 'name'}
                            className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                        />
                        {errors.name && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-base text-black font-semibold">Photo url</label>
                        <input
                            {...register("photo_url")}
                            type="text"
                            name="photo_url"
                            id="photo_url"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            placeholder={user?.photoURL || 'photo url here'}
                            className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                        />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-base text-black font-semibold">Email</label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onSubmit={(e) => setEmail(e.target.value)}
                            placeholder={user?.email || "email"}
                            className="w-full px-4 py-3 rounded-md focus:border-violet-400 bg-white"
                        />
                        {errors.email && <span className="text-red-500">This field is required</span>}
                    </div>
                    <button className="block w-full p-3 text-center rounded-sm bg-[#00AFEF] text-xl font-bold text-white">Update</button>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;