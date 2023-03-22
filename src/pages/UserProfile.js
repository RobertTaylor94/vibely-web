import { Container, Typography, Button } from "@mui/material";
import React from "react";
import { useAuthValue } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function UserProfile() {
    const {currentUser} = useAuthValue()
    console.log(currentUser)
    //set user email from currentUser if it is not null
    const userEmail = currentUser ? currentUser.email : ''
    const displayName = currentUser ? currentUser.displayName : ''

    return (
        <Container>
            <Typography variant="h3">User: {displayName}</Typography>
            <Button variant='container' onClick={() => signOut(auth)}>Sign Out</Button>
        </Container>
    )
}