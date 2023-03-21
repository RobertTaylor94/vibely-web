import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
// import { styled } from '@mui/material/styles';
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import CardActions from '@mui/material/CardActions';
import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';

import testAvatar from "../../assets/test-avatar.jpg";
import { CardActions, IconButton } from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import ModeCommentRoundedIcon from "@mui/icons-material/ModeCommentRounded";

import "./PostCard.css";

function Postcard() {
  return (
    <>
      <Container maxWidth="lg"  style={{ marginTop: "50px" }} className="main-container">
        <Card sx={{ maxWidth: 545 }}>
          <CardHeader
            avatar={
              <Avatar
                src={testAvatar}
                sx={{ width: 54, height: 54 }}
                aria-label="recipe"
              >
                R
              </Avatar>
            }
            // }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title="@User-tag"
            subheader="timestamp from firebase"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://media.tenor.com/YqaEAAzzbXwAAAAS/llama-chew.gif"
            alt="Llama turn"
            className="image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Some sort of text content that will be posted to firebase database
              and then gotten from said database and dynamically generated on
              our timeline. Potentially also related to the image or news story
              above? Or a gif from giphy or something?
            </Typography>

            <CardActions className="card-action-container">
                  <IconButton aria-label="like" className="thumb-up">
                    <ThumbUpRoundedIcon />
                  </IconButton>
                  <IconButton className="thumb-down">
                    <ThumbDownAltRoundedIcon />
                  </IconButton>
                  <IconButton className="comment">
                    <ModeCommentRoundedIcon></ModeCommentRoundedIcon>
                  </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Postcard;
