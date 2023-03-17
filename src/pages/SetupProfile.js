import React from "react";
import { TextField, Typography, Container, Button } from "@mui/material";
import { useAuthValue } from "../AuthContext";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SetupProfile() {

    const {currentUser} = useAuthValue()
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput})
        console.log(data)
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
            <Button variant="contained" onClick={(e) => handleSubmit(e)}>Complete Profile</Button>
        </Container>
    )
}