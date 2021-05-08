import React from 'react';
import NavBar from '../../molecules/NavBar';
import { Container } from "react-bootstrap";
import Loggo from "../../../assets/Logo/SabbyMusicLoggo.jpg";

const HomeScreen = () => {
    return (
        <div>
        <NavBar />
        <Container>
        <img src={Loggo} alt="Logo" className="img-fluid"/> 
        </Container>
        </div>
        
    );
};

export default HomeScreen;

