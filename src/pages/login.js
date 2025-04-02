import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Container, Form, Button, Card } from "react-bootstrap";
import {Link} from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "22rem" }} className="p-4 shadow">
                <h2 className="text-center">Iniciar Sesión</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Iniciar Sesión
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
                </p>
            </Card>
        </Container>
    );
}

export default Login;
