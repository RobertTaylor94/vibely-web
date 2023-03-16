import { Container, Typography, Button } from "@mui/material";
import React from "react";
import { useAuthValue } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Profile() {
    const {currentUser} = useAuthValue()
    console.log(currentUser)
    //set user email from currentUser if it is not null
    const userEmail = currentUser ? currentUser.email : ''

    return (
        <Container>
            <Typography variant="h3">User: {userEmail}</Typography>
            <Button variant='container' component='span' onClick={() => signOut(auth)}>Sign Out</Button>
        </Container>
    )
}