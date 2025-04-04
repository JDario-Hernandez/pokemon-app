import React, {useContext} from "react";
import AuthContext from "../../context/AuthContext";
import {Card, Container, Table} from "react-bootstrap";

function Usuario() {
    const {user} = useContext(AuthContext);

    function checkEstado(user) {
        if (user.estado === "Activo") {
            return <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>;
        } else {
            return <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>;
        }
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center"
                   style={{marginTop: "100px"}}>
            <Card className="p-4 shadow">
                <Card.Img
                    variant="top"
                    src="/images/ash.png"
                    alt="Profile"
                    style={{height: "400px", width: "300px", objectFit: "cover", borderRadius: "10px", margin: "auto"}}
                />

                <Card.Body>
                    <Card.Title className="text-center">Información de Usuario</Card.Title>

                    <Table striped bordered hover className="text-center">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Email</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fecha de creacion</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <div className="form-check form-switch">
                                    {checkEstado(user)}
                                </div>
                            </td>
                            <td>{user.fechaCreacion}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Usuario;