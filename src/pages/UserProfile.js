import {Container} from "@mui/material";
import { useAuthValue } from "../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function UserProfile() {
    const {currentUser} = useAuthValue()
    console.log(currentUser)
    //set user email from currentUser if it is not null
    // const userEmail = currentUser ? currentUser.email : ''
    const displayName = currentUser ? currentUser.displayName : ''
    const userBio = currentUser ? currentUser.bio : ''
    return (
        <Container sx={{ m: 2 }}>
            <Typography variant="h3">User: {displayName}</Typography>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 260 }}
                image="https://images.unsplash.com/photo-1542988538-30d8820ec5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Profile Pic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bio 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {userBio}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Followers:
                </Typography>
              </CardContent>
              <CardActions>
              <Button variant='container' onClick={() => signOut(auth)}>Sign Out</Button>
              </CardActions>
            </Card>
        </Container>       
    )
}




