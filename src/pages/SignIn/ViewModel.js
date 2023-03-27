import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const ViewModel = () => {
    const [data, setData] = useState({});

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput})
    }
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            navigate("/profile")
        })
        .catch((err) => {
            console.log(err.code)
            alert(err.message)
        })
    }

    return {
        data,
        handleInput,
        handleSubmit
    }
}

export { ViewModel };