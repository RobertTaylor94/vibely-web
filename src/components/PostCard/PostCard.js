import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
// import { styled } from '@mui/material/styles';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
// import CardActions from '@mui/material/CardActions';
import Avatar from "@mui/material/Avatar";


import "./PostCard.css";

function Postcard(props) {

  return (
    <>
      <Container maxWidth="lg"  style={{ marginTop: "50px" }} className="main-container">
        <Card sx={{ maxWidth: 545 }}>
          <CardHeader
            avatar={
              <Avatar
                // src={testAvatar}
                sx={{ width: 54, height: 54 }}
                aria-label="recipe"
              >

              </Avatar>
            }
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={props.displayname}
            // subheader="timestamp from firebase"
          />
          {/* <CardMedia
            component="img"
            height="194"
            image="https://media.tenor.com/YqaEAAzzbXwAAAAS/llama-chew.gif"
            alt="Llama turn"
            className="image"
          /> */}
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.post}
            </Typography>

            {/* <CardActions className="card-action-container">
                  <IconButton aria-label="like" className="thumb-up">
                    <ThumbUpRoundedIcon />
                  </IconButton>
                  <IconButton className="thumb-down">
                    <ThumbDownAltRoundedIcon />
                  </IconButton>
                  <IconButton className="comment">
                    <ModeCommentRoundedIcon></ModeCommentRoundedIcon>
                  </IconButton>
            </CardActions> */}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Postcard;
