import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login=() => {

    const navigate=useNavigate()

    const [ user, setUser]=useState({
        email: "",
        password: ""
    })

    const handleChange= e => {
        const {name, value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const login = () => {
        axios.post("http://localhost:9003/login", user)
        .then(res => alert(res.data.message))
        

    }

    return (
        <div className="login">
            {console.log("User", user)}
            <h1>Member Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email Address" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>Don't have an account already?</div>
            <div className="button" onClick={() => navigate('/signup')}>Sign up</div>
        </div>
    )
        

}

export default Login