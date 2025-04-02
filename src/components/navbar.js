import React from "react";
import {Navbar, Nav, Container, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function MyNavbar() {
    return (
        <Navbar bg="light" variant="light" expand="lg">
            <Container className="d-flex justify-content-between align-items-center">

                <div className="d-flex align-items-center">
                    <Nav.Link className="m-auto" as={Link} to="/home">
                        <img
                            src="/images/pokemon.png"
                            alt="Logo"
                            style={{width: "100px", height: "40px"}}
                            className="mr-2"
                        />
                    </Nav.Link>
                </div>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="m-auto" as={Link} to="/personajes">Personajes</Nav.Link>
                        <Nav.Link className="m-auto" as={Link} to="/usuario">Usuario</Nav.Link>
                        <Nav.Link className="m-auto" as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link className="m-auto" as={Link} to="/login">
                            <Button variant="warning" type="submit" className="w-100">
                                Salir
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
        ;
}

export default MyNavbar;
