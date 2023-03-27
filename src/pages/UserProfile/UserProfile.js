import {Container} from "@mui/material";
import { useAuthValue } from "../../AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { db } from "../../firebaseConfig";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { doc,getDoc } from "firebase/firestore";
import { useState } from "react";
import { UserProfileModel } from "./ViewModel.js"

export default function UserProfile() {
    const {currentUser} = useAuthValue()
    const { getBio, userBio, displayName, userEmail } = UserProfileModel();

    if (currentUser) {
      getBio()
    }

    return (
        <Container sx={{ m: 2 }}>
            <Typography variant="h3"><strong>{displayName}</strong></Typography>
            <Card sx={{ maxWidth: 500 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {userBio}
                </Typography>
                <Typography variant="body2" color="text.primary">
                </Typography>
                <Typography variant="body2" color="text.primary" >
                  <strong>  Email: {userEmail} </strong> 
                </Typography>
                {/* <Typography variant="body2" color="text.primary">
                    Followers:
                </Typography> */}
              </CardContent>
              <CardActions>
              <Button variant='contained' sx={{ backgroundColor: 'black' }}onClick={() => signOut(auth)}>Sign Out</Button>
              </CardActions>
            </Card>
        </Container>       
    )
}




