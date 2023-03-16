import { useState } from "react";
import { Button, Container, TextField, Box, Typography } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebaseConfig'

function SignUp() {
    let auth = getAuth();
    const [data, setData] = useState({});

    const handleInput = (event) => {
        let newInput = { [event.target.name]: event.target.value }
        setData({ ...data, ...newInput})
    }

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
            console.log(response.user)
        })
        .catch((err) => {
            console.log(err.code)
            alert(err.message)
        })
    }

    return (
    <div>
        <Typography variant='h2' gutterBottom>Sign Up</Typography>
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
                variant='outlined'
                onChange={(e) => handleInput(e)}
            />
            <Box sx={{ margin: '10px' }}><Button type='submit' variant='contained' onClick={handleSubmit}> Submit</Button></Box>
            </Box>
    </div>
            
    )
}

export default SignUp