import React, {useContext, useState} from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import {Link} from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Register() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const { register } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }
        register(email);
    };

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <img
                src="/images/pokemon.png"
                alt="Login Image"
                className="img-fluid mb-4"
                style={{ maxWidth: '600px' }}
            />
            <Card style={{ width: "24rem" }} className="p-4 shadow">
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3 text-center">
                        <Form.Label column="lg">Nombre de usuario</Form.Label>
                        <Form.Control
                            type="text"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-center">
                        <Form.Label column="lg">Correo</Form.Label>
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

                    <Form.Group className="mb-3 text-center">
                        <Form.Label column="lg">Confirmar Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Button variant="warning" type="submit" className="w-100">
                        Registrarse
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                </p>
            </Card>
        </Container>
    );
}

export default Register;
