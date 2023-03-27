import { React } from "react";
import { Button, Container, TextField, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ViewModel } from "./ViewModel.js";

function SignUp() {

    const { handleInput, handleSubmit } = ViewModel();

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
                type='password'
                variant='outlined'
                onChange={(e) => handleInput(e)}
            />
            <Box sx={{ margin: '10px' }}>
                <Button type='submit' variant='contained' onClick={(e) => handleSubmit(e)} sx={{ backgroundColor: 'black' }} > Submit</Button>
            </Box>
            </Box>
            <Container>
                <Typography>Already have an account?</Typography>
                <Button component={Link} variant='outlined' key="signin" to="/signin">Sign In</Button>
            </Container>
    </div>
            
    )
}

export default SignUp