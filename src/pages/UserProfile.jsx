import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex justify-center items-center h-[60vh]">
            <Helmet>
                <title>Cozy Reside | Profile</title>
            </Helmet>
            <div className="flex flex-col items-center gap-4 border-2 p-4 bg-[#00AFEF7A] md:w-5/12 rounded-xl">
                <div className="w-40 h-40">
                    <img className="rounded-full h-full w-full border-4 p-2" src={user?.photoURL} alt="photo" />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-black text-center">Name: {user?.displayName}</h3>
                    <h3 className="text-lg">Email: {user?.email}</h3>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;