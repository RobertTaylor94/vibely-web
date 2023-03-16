import React from "react";
import { useContext } from "react";

//create context
const AuthContext = React.createContext()

//shares the user state to all children of the AuthProvider
export function AuthProvider({children, value}) {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

// allows use of the value passed from AuthProvider
export function useAuthValue(){
    return useContext(AuthContext)
  }