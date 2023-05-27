import {  useState, createContext, useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const UserContext = createContext({}); 


export function UserProvider({ children }) {
    const [user, setUser] = useState();
    const navigate = useNavigate();


    // const isAuthenticated = !!user; //!! => transformando a variável em um booleano

    
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         console.log(`Usuário autenticado`)
    //         navigate('/home')
    
        
    //     }
    // }, [isAuthenticated]);

    // return (
    //     <UserContext.Provider value={{user,setUser,isAuthenticated}}>
    //         {children}
    //     </UserContext.Provider>
    // );
}

export const useUserAuthenticationContext = () => useContext(UserContext);
