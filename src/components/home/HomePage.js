import React from 'react'
import './HomePage.css'
import { useNavigate } from "react-router-dom"
import {auth} from '../firebase'
import { signOut } from 'firebase/auth'


function HomePage() {
    const navigate = useNavigate();
    const toRegister = () => {
        navigate("/Register");
    }

    const toData = () => {
        window.open("https://console.cloud.google.com/welcome?project=nart-f1a98", "_self");
    }
    
    const toLogOut = () => {
        signOut(auth)
        .then(()=>{navigate("/")})
        .catch((error) => {console.log(error)});
    }

    return (
        <div className='homeContainer'>
            <div className='homeLeft' onClick={toRegister}>
                Register
            </div>
            <div class="separator"></div>
            <div className='homeMid' onClick={toLogOut}>
                Log Out
            </div>
            <div class="separator"></div>
            <div className='homeRight' onClick={toData}>
                Data
            </div>
        </div>
    )
}

export default HomePage
