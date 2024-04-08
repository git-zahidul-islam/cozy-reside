import { createContext } from "react";





export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    



    const allData = {
        name: 'ami valo nai'
    }
    return (
        <AuthContext.Provider value={allData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;