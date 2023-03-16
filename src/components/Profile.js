import { Container, Typography } from "@mui/material";
import React from "react";
import { useAuthValue } from "../AuthContext";

export default function Profile() {
    const {currentUser} = useAuthValue()
    console.log(currentUser)
    //set user email from currentUser if it is not null
    const userEmail = currentUser ? currentUser.email : ''

    return (
        <Container>
            <Typography variant="h3">User: {userEmail}</Typography>
        </Container>
    )
}