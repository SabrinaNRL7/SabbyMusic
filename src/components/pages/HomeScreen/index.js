import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/custom.css';
import image from "../../../assets/Images/page.jpg";
import imagee from "../../../assets/Images/InkFree.jpg";
import {Link} from "react-router-dom";

const HomeScreen = () => {
    return (
        <div>
        <br/>
        <img src={imagee} alt="page" className="loggo"/>      
        <figure className="position-relative">
        <img src={image} alt="page" className="img-fluid" width="100%"/>
        </figure>
        <h1>
            Welcome To Sabby Music
        </h1>
        <figcaption>
        <Link className="nav-link" to="/signin" >Sign In</Link>             
        <Link className="nav-link" to="/signup" >Sign Up</Link>
        </figcaption>

        </div>
        
    );
};

export default HomeScreen;

