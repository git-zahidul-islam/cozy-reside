import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../context/AuthProvider";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex justify-center items-center h-[calc(100vh-68px)]">
            <Helmet>
                <title>Cozy Reside | Profile</title>
            </Helmet>
            <div className="flex flex-col items-center gap-4 border-2 p-4 border-[#00AFEF] md:w-5/12 min-h-96">
                <div className="w-36 h-36">
                    <img className="rounded-full h-full w-full" src={user?.photoURL} alt="photo" />
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