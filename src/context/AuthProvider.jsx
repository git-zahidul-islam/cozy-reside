import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebasc/firebasc.config";





export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const userLogOut = () =>{
        return signOut(auth)
    }


    // observer 
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log("i am observer",currentUser)
        })
        return () =>{
            unSubscribe()
        }
    },[])

    const allData = {
        createUser,
        userLogin,
        userLogOut,
        user
    }
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;