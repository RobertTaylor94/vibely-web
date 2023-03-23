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
import { doc,getDoc } from "firebase/firestore";
import { useState } from "react";

export default function UserProfile() {
    const {currentUser} = useAuthValue()
    const [bio, setBio] = useState();
     //set user email from currentUser if it is not null
    // const userEmail = currentUser ? currentUser.email : ''
    const displayName = currentUser ? currentUser.displayName : ''
    const userEmail = currentUser ? currentUser.email : ''
    // console.log(currentUser)

   async function getBio() {
      const docRef = doc(db, "users", currentUser.uid)
      const docSnap = await getDoc(docRef);

      const data = docSnap.exists() ? docSnap.data() : null
      const userBio = data.bio
      setBio(userBio)
    }

    if (currentUser) {
      getBio();
    }

    return (
        <Container sx={{ m: 2 }}>
            <Typography variant="h3"><strong>User: {displayName}</strong></Typography>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 260 }}
                image="https://images.unsplash.com/photo-1542988538-30d8820ec5fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Profile Pic"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bio: {bio}
                </Typography>
                <Typography variant="body2" color="text.primary">
                </Typography>
                <Typography variant="body2" color="text.primary" >
                  <strong>  Email: {userEmail} </strong> 
                </Typography>
                <Typography variant="body2" color="text.primary">
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




