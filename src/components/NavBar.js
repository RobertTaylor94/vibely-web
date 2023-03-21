import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Avatar, Button, Typography, Divider, List, ListItem, ListItemButton, ListItemText, CssBaseline, Toolbar, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleIcon from '@mui/icons-material/AddCircleOutline';
import { useAuthValue } from "../AuthContext";

function NavBar(props) {

    const {currentUser} = useAuthValue()
    let initial = ""
    if (currentUser && currentUser.displayName) {
        initial = currentUser.displayName.charAt(0).toUpperCase()
    } else {
        initial = "P"
    }

    const hideBlock = currentUser ? "none" : "";
    const showBlock = currentUser ? "" : "none";

  return (
    <Box sx={{ display: "flex", paddingTop: "60px" }}>
        <CssBaseline />
        <AppBar component='nav' position="fixed" >
            <Toolbar >
                <Box sx={{ flexGrow: 1, justifyContent: 'space-between', display: "flex"}}>
                    <Button color="inherit" component={Link} key="home" to="/"><Typography variant="h6">Vibely</Typography></Button>
                    <Button color="inherit" component={Link} key="search" to="/search" sx={{ display: `${showBlock}` }}>Search</Button>
                </Box>
                <Box>
                    <Button variant="contained" component={Link} key="signup" to="/signup" sx={{ display: `${hideBlock}` }}>Sign Up</Button>
                    {/* <Button variant="contained" endIcon={<AddCircleIcon/>}>New Vibe</Button> */}
                    <Button component={Link} key="profile" to="/profile" sx={{ display: `${showBlock}` }}><Avatar alt="profile icon" src="">{initial}</Avatar></Button>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default NavBar;