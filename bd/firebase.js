const { initializeApp } = require('firebase/app');
const { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } = require('firebase/auth');

const firebaseConfig = {
  apiKey: "AIzaSyBjFmgq2alFwZ4MXwdmx1Ia8cf7XGejLn8",
  authDomain: "studyshare-6065a.firebaseapp.com",
  projectId: "studyshare-6065a",
  storageBucket: "studyshare-6065a.appspot.com",
  messagingSenderId: "1017105158763",
  appId: "1:1017105158763:web:7d8c49e9bf6ca29248172e",
  measurementId: "G-6XRP4KX01B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail };
