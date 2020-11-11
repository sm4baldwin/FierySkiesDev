import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7UpBZGlE0D4Q3tWtGt4QMPokv5tEtFX0",
    authDomain: "fieryskies.firebaseapp.com",
    databaseURL: "https://fieryskies.firebaseio.com",
    projectId: "fieryskies",
    storageBucket: "fieryskies.appspot.com",
    messagingSenderId: "414359756563",
    appId: "1:414359756563:web:9fa31c7157b4152cec04e6",
    measurementId: "G-DT2CVW0X73"
};
firebase.initializeApp(firebaseConfig)

export default firebase.database()