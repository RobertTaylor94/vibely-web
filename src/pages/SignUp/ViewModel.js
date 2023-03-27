import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const ViewModel = () => {

const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            navigate("/setup")
        })
        .catch((err) => {
            console.log(err.code)
            alert(err.message)
        })
        const newData = ""
        setData({newData})
    }

    return {
        handleInput,
        handleSubmit
    }
}

export { ViewModel };