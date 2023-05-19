import React, { useState } from "react"
import { auth } from '../firebase.js'
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import './LoginPage.css'
import '../../NART2.png'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      alert("signed in");
      navigate("/Home", {replace:true});
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
    
  }

  return (
    <div class="container">
      <img src='../../NART2.png' alt='NArt Logo'></img>
      <form>
        <label for="uname"><b>Username</b></label>
        <input type="text" 
        placeholder="Enter Username" 
        name="uname" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required/>
    
        <label for="psw"><b>Password</b></label>
        <input type="password" 
        placeholder="Enter Password"
        name="psw"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required/>
    
        <button type="submit" onClick={handleSubmit}>Login</button>
      </form> 
    </div>
  );
}

export default LoginPage;