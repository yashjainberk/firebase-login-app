import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { BrowserRouter as Router, Route, Redirect, useHistory } from 'react-router-dom';


// Initialize Firebase with your configuration
firebase.initializeApp({
        apiKey: "AIzaSyD7kyT7--aRtHN8z-waj6XQEFX0C2EhP9Q",
        authDomain: "loginpage-f0d24.firebaseapp.com",
        projectId: "loginpage-f0d24",
        storageBucket: "loginpage-f0d24.appspot.com",
        messagingSenderId: "1095908538136",
        appId: "1:1095908538136:web:6c6981f6f549ee9da8d06d",
        measurementId: "G-5CSLW6TXKT"
});


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      useHistory.push('/camera');
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default Login;




