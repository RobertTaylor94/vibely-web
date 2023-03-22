import { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

function SignIn() {
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
                variant='outlined'
                onChange={(e) => handleInput(e)}
            />
            <Box sx={{ margin: '10px' }}><Button type='submit' variant='contained' onClick={(e) => handleSubmit(e)}> Submit</Button></Box>
            </Box>
    </div>
            
    )
}

export default SignIn