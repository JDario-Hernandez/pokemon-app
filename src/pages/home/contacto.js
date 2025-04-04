import React from "react";
import {Card, Container} from "react-bootstrap";

function Contact() {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center" style={{marginTop:"200px"}}>
            <Card style={{ width: "22rem" }} className="p-4 shadow">
                <p className="text-center mt-3">Jurgen Dario Hernandez Anzola</p>
                <p className="text-center mt-3">3132150538</p>
                <p className="text-center mt-3">
                    <a href="https://pokeapi.co" target="_blank" rel="noreferrer" >PokeApi</a>
                </p>
                <p className="text-center mt-3">jdarhernandez@poligran.edu.co</p>
            </Card>
        </Container>
    );
}

export default Contact;