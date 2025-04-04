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
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <img
                src="/images/pokemon.png"
                alt="Login Image"
                className="img-fluid mb-4"
                style={{ maxWidth: '600px' }}
            />

            <Card style={{ width: "22rem" }} className="p-4 shadow">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-center">
                        <Form.Label column="lg">Nombre usuario</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label column="lg">Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="warning" type="submit" className="w-100">
                        Iniciar Sesión
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    <Link to="/register">Registrarse</Link>
                </p>
            </Card>
        </Container>
    );
}

export default Login;
