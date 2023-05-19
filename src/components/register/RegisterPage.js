import React, { useState } from "react"
import './RegisterPage.css'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(()=>{
            alert("register success!");
            navigate("/Home", {replace:true});
            }
        )
        .catch((error) => {
            //const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    const handleCancel = () => {
        navigate("/Home");
    }

  return (
    <div className='registerContainer'>
        
        <form>
            <label>Name:</label>
            <input type='text'></input>
            <label>Email:</label>
            <input type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password:</label>
            <input type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register New Staff</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    </div>
  )
}

export default RegisterPage