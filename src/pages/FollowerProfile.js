import { Container, Typography } from "@mui/material";
import React from "react";


export default function FolloweProfile(props) {
    const user = props.user
    //set user email from currentUser if it is not null
    // const userEmail = user ? user.email : ''
    const displayName = user ? user.displayName : ''

    return (
        <Container>
            <Typography variant="h3">User: {displayName}</Typography>
        </Container>
    )
}