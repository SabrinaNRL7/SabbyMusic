import React, { useState, useEffect } from "react";
import firebase from '../../../config/Firebase';
import { useHistory } from 'react-router-dom';

const SignIn = ({title, angka}) => { 
    const [welcomeText, setWelcomeText] = useState("Welcome To Sabby Music");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    let history = useHistory();
    
    useEffect(() => {
        console.log("component did mount");
    }, []);

    useEffect(() => {
        console.log("component did update");
    }, [welcomeText]);

    const handleSubmit = () => {
        setWelcomeText("Welcome Back");
        const data = {
            email: email,
            password: password,
        };
        // console.log(data);
        firebase.auth()
        .signInWithEmailAndPassword(email,password)
        .then((res) => history.push("/"))
        .catch((error) => console.log("Error", error));
    };


    return (
        //JSX
        <div className="mt-5">
            <h3>{welcomeText}</h3>
            <h5>
                {title} {angka}
            </h5>
            <p className="form-label">Email</p>
            <input
                className="form-control"
                placeholder="Input email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
            />
            <br/>
            <p className="form-label">Password</p>
            <input
                className="form-control" 
                placeholder="Input password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <br/>
            <button type="button" onClick={handleSubmit} className="btn btn-primary">
                Sign In
            </button>
        </div>
    );
};
export default SignIn;