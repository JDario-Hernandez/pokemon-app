import {createContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const users = [
        {
            id: 1,
            nombre: "Juan Pérez",
            email: "juan.perez@example.com",
            role: "user",
            estado: "Activo",
            fechaCreacion: "2024-04-01"
        },
        {
            id: 2,
            nombre: "María López",
            email: "maria.lopez@example.com",
            role: "admin",
            estado: "Inactivo",
            fechaCreacion: "2024-03-15"
        },
        {
            id: 3,
            nombre: "Carlos Rodríguez",
            email: "carlos.rodriguez@example.com",
            role: "user",
            estado: "Activo",
            fechaCreacion: "2024-02-20"
        },
        {
            id: 4,
            nombre: "Ana Torres",
            email: "ana.torres@example.com",
            role: "user",
            estado: "Suspendido",
            fechaCreacion: "2024-01-10"
        },
        {
            id: 5,
            nombre: "Luis Gómez",
            email: "luis.gomez@example.com",
            role: "admin",
            estado: "Activo",
            fechaCreacion: "2024-03-25"
        }
    ];
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (email) => {
        const newUser = {id: 10, nombre: "Pepito Perez", email, role: email.includes("admin") ? "admin" : "user", estado: "Activo", fechaCreacion: "2024-04-01"};
        setUser(newUser);
        users.push(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        navigate("/home");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{user, users, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
