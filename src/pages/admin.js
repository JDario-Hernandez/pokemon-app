import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Admin() {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <h2>Bienvenido Administrador</h2>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    );
}

export default Admin;