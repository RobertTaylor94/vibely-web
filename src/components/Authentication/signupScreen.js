import { useState } from "react";
import { Button, Container, TextField, Box, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function SignUp() {
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