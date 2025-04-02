import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Dashboard() {
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <h2>Bienvenido al Dashboard</h2>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    );
}

export default Dashboard;