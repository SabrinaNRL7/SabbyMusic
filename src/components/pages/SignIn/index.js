import React, { useState } from "react";
import firebase from '../../../config/Firebase';
import { useHistory } from 'react-router-dom';

const SignIn = ({title, number}) => { 
    
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState("");

    let history = useHistory(); 

    const handleSubmit = () => {
       
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
        <div className="mt-5">
            <h5>
                {title} {number}
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