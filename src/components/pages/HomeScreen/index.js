import React from 'react';
import NavBar from '../../molecules/NavBar';
import { Container } from "react-bootstrap";
import Loggo from "../../../assets/Logo/SabbyMusicLoggo.jpg";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
        <NavBar />
        <br/>
        <Container>
        <img src={Loggo} alt="Logo" className="img-fluid" width="53%"/> 
        </Container>
        <Link className="nav-link" to="/signin" >Sign In</Link>             
        <Link className="nav-link" to="/signup" >Sign Up</Link>
        </div>
        
    );
};

export default HomeScreen;

