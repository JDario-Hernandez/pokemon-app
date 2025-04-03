import React, { useEffect, useState, useRef } from "react";
import { Card, Container, Row, Col, ListGroup, Spinner } from "react-bootstrap";
import "./personajes.css";

// Colores según el tipo de Pokémon
const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD"
};

function Personajes() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const observer = useRef();

    // Obtener más Pokémon
    const fetchPokemons = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
            const data = await response.json();

            const pokemonDetails = await Promise.all(
                data.results.map(async (pokemon) => {
                    const res = await fetch(pokemon.url);
                    const details = await res.json();
                    return {
                        name: details.name.toUpperCase(),
                        image: details.sprites.other["official-artwork"].front_default || details.sprites.front_default,
                        shiny: details.sprites.other["official-artwork"].front_shiny || details.sprites.front_shiny,
                        types: details.types.map(t => t.type.name),
                        abilities: details.abilities.map(a => a.ability.name).join(", "),
                        weight: details.weight / 10,
                        height: details.height / 10,
                        baseExperience: details.base_experience,
                    };
                })
            );

            setPokemons(prevPokemons => [...prevPokemons, ...pokemonDetails]);
            setOffset(prevOffset => prevOffset + 20);
        } catch (error) {
            console.error("Error al obtener los Pokémon:", error);
        } finally {
            setLoading(false);
        }
    };

    // Observador de scroll infinito
    useEffect(() => {
        const observerInstance = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchPokemons();
                }
            },
            { threshold: 1 }
        );

        if (observer.current) observerInstance.observe(observer.current);

        return () => observerInstance.disconnect();
    }, [fetchPokemons]);


    return (
        <Container>
            <Row className="mt-4">
                {pokemons.map((pokemon, index) => {
                    const primaryType = pokemon.types[0];
                    const backgroundColor = typeColors[primaryType] || "#777";

                    return (
                        <Col key={index} md={4} sm={6} xs={12} className="mb-4 d-flex justify-content-center">
                            <div className="pokemon-card" style={{ backgroundColor }}>
                                {/* Card Frontal */}
                                <div className="card-front">
                                    <Card className="shadow-lg rounded pokemon-tcg-card">
                                        <Card.Img variant="top" src={pokemon.image} alt={pokemon.name} />
                                        <Card.Body>
                                            <Card.Title className="text-center">{pokemon.name}</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item><strong>Tipo:</strong> {pokemon.types.join(", ")}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>

                                {/*Card Trasera */}
                                <div className="card-back">
                                    <Card className="shadow-lg rounded pokemon-tcg-card">
                                        <Card.Img variant="top" src={pokemon.shiny} alt={pokemon.name + " Shiny"} />
                                        <Card.Body>
                                            <Card.Title className="text-center">{pokemon.name} (Shiny)</Card.Title>
                                            <ListGroup variant="flush">
                                                <ListGroup.Item><strong>Habilidades:</strong> {pokemon.abilities}</ListGroup.Item>
                                                <ListGroup.Item><strong>Peso:</strong> {pokemon.weight} kg</ListGroup.Item>
                                                <ListGroup.Item><strong>Altura:</strong> {pokemon.height} m</ListGroup.Item>
                                                <ListGroup.Item><strong>Exp. Base:</strong> {pokemon.baseExperience}</ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>

            {/* Elemento Observador para Scroll Infinito */}
            <div ref={observer} style={{ height: "20px" }} />

            {/* Spinner de carga */}
            {loading && (
                <div className="text-center my-4">
                    <Spinner animation="border" />
                </div>
            )}
        </Container>
    );
}

export default Personajes;
