import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCQRuAbiJcLuL3Nt4VJae8oKqeWBUtp5os",
    authDomain: "sabby-music.firebaseapp.com",
    databaseURL: "https://sabby-music-default-rtdb.firebaseio.com",
    projectId: "sabby-music",
    storageBucket: "sabby-music.appspot.com",
    messagingSenderId: "716535311058",
    appId: "1:716535311058:web:0482fdf373b49c4805db0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;