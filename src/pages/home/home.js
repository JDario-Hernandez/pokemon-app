import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";


import MyNavbar from "../../components/navbar";
import Personajes from "./personajes";
import Usuario from "./usuario";
import Contact from "./contacto";
import Video from "./video";
import Admin from "./admin";

function Home() {
    return (
        <div>
            <MyNavbar />

            <div className="container mt-5">
                <Routes>
                    <Route path="/personajes" element={<Personajes />} />
                    <Route path="/usuario" element={<Usuario />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/video" element={<Video />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Navigate to="/video" replace />} />
                </Routes>
            </div>
        </div>
    );
}

export default Home;
