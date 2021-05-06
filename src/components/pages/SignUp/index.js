import React, {useState} from 'react';
import firebase from '../../../config/Firebase';
import { useHistory } from 'react-router-dom';


const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState ('');
    
    let history = useHistory();

    const onSubmit = () => {

        const data = {
            email: email,
            fullName: fullName,
        };

        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    //Simpan ke realtime database
    const userId = userCredential.user.uid;
    firebase
    .database()
    .ref('users/' + userId)
    .set(data);

    //clear data sebelum redirect
    setFullName('');
    setEmail('');
    setPassword('');
    
    //Redirect ke halaman log in
    history.push("/login");
  })
  .catch((error) => {
   console.log(error);
   //tampilkan pesan error
  });
    }; 


    return (
        <div className="container mt-5">
            <p className="form-label mt-4">Full Name</p>
            <input
                className="form-control"
                placeholder="Input your full name" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                
            />
            
            <p className="form-label mt-4">Email</p>
            <input
                className="form-control"
                placeholder="Input email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
            />
            
            <p className="form-label mt-4">Password</p>
            <input
                className="form-control" 
                placeholder="Input password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            
            <button type="button" onClick={onSubmit} className="btn btn-primary mt-4">
                Register New User
            </button>
        </div>
    );
};

export default Register;
