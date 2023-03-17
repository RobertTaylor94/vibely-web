import React from "react";
import { TextField, Typography, Container, Button } from "@mui/material";
import { useAuthValue } from "../AuthContext";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, doc, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default function SetupProfile() {

    const {currentUser} = useAuthValue()
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        updateProfile(currentUser, {
            displayName: data.displayName
        }).then(() => {
            console.log(`New displayname: ${currentUser.displayName}`)
        }).catch((error) => {
            console.log(error)
        })

        const dbRef = collection(db, "users")
        const user = {
            displayName: data.displayName,
            bio: data.bio,
            uid: currentUser.uid,
            followers: []
        }

        console.log(user)

        addDoc(dbRef, user)
            .then(docRef => {
                console.log("Document added successfully")
            }).catch(error => {
                console.log(error)
            })

        navigate("/profile")
    }

    return (
        <Container>
            <TextField     
                sx={{ margin: '10' }}
                name='displayName'
                id='displayName'
                label='Display Name'
                variant='outlined'
                onChange={(e) => handleInput(e)}/>
            <TextField     
                sx={{ margin: '10' }}
                name='bio'
                id='bio'
                label='Bio'
                variant='outlined'
                onChange={(e) => handleInput(e)}/>
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>Complete Profile</Button>
        </Container>
    )
}