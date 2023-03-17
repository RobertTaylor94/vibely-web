import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Avatar, Button, Typography, Divider, List, ListItem, ListItemButton, ListItemText, CssBaseline, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import { useAuthValue } from "../AuthContext";

function NavBar(props) {

    const {currentUser} = useAuthValue()
    const inital = currentUser ? currentUser.displayName.charAt(0).toUpperCase() : "P";
    const loggedIn = currentUser ? "none" : "";

  return (
    <Box sx={{ display: "flex", paddingTop: "60px" }}>
        <CssBaseline />
        <AppBar component='nav' position="fixed" >
            <Toolbar >
                <Box sx={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} key="home" to="/"><Typography variant="h6">Vibely</Typography></Button>
                </Box>
                <Box>
                    <Button variant="contained" component={Link} key="signup" to="/signup" sx={{ display: `${loggedIn}` }}>Sign Up</Button>
                    {/* <Button variant="contained" endIcon={<AddCircleIcon/>}>New Vibe</Button> */}
                    <Button component={Link} key="profile" to="/profile"><Avatar alt="profile icon" src="">{inital}</Avatar></Button>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar;