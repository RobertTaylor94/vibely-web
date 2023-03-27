import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ViewModel } from "./ViewModel.js";

function SignIn() {
    const { data, handleInput, handleSubmit } = ViewModel();

    return (
    <div>
        <Typography variant='h2' gutterBottom>Sign In</Typography>
        <Box component='form' sx={{ margin: '20px' }} >
            <TextField
                sx={{ margin: '10' }}
                name='email'
                id='email'
                label='Email'
                variant='outlined'
                onChange={(e) => handleInput(e)}
            />
            <TextField
                sx={{ margin: '10' }}
                name='password'
                id='password'
                label='Password'
                type='password'
                variant='outlined'
                onChange={(e) => handleInput(e)}
            />
            <Box sx={{ margin: '10px'}}><Button type='submit' variant='contained' onClick={(e) => handleSubmit(e)} sx={{backgroundColor: 'black' }}> Submit</Button></Box>
            </Box>
    </div>
            
    )
}

export default SignIn