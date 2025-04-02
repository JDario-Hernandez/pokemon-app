import {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (email) => {
        const newUser = {email, role: email === "admin@example.com" ? "admin" : "user"};
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        navigate("/home");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
