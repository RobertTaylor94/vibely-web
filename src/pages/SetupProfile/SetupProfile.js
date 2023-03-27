import React from "react";
import { TextField, Container, Button } from "@mui/material";
import { ViewModel } from "./ViewModel.js"

export default function SetupProfile() {

    const { handleInput, handleSubmit } = ViewModel();
    
    return (
        <Container sx={{ m: 2 }}>
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