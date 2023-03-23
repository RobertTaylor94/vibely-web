import {
  IconButton,
  Box,
  Avatar,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import GifBoxIcon from "@mui/icons-material/GifBox";
import Avatar1 from '../assets/avatars/avatar1.png';
import { useAuthValue } from "../AuthContext";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function TweetBox() {
  const [data, setData] = useState({});

  const { currentUser } = useAuthValue();
  // let initial = "";
  // if (currentUser && currentUser.displayName) {
  //   initial = currentUser.displayName.charAt(0).toUpperCase();
  // } else {
  //   initial = "P";
  // }

  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };

  const postVibe = () => {
    //create a new post object user the texfield input and current user unfo
    const newVibe = {
      displayName: currentUser.displayName,
      uid: currentUser.uid,
      post: data.vibe,
    };

    const vibesCollection = collection(db, "vibes", `${currentUser.uid}`, "posts") //sets a reference to a posts subcollection in the current user
    addDoc(vibesCollection, newVibe) //adds a new document containg the post to a subcollection the users own collection
      .then((docRef) => {
        console.log("User added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box component="form" autoComplete="off">
      <Card sx={{ height: 130 }}>
        <CardContent className="row d-flex flex-nowrap justify-content-around">
          <Avatar src={Avatar1} />
          <TextField
            sx={{ maxWidth: "85%" }}
            placeholder="What's on your mind?"
            variant="standard"
            name="vibe"
            onChange={(e) => handleInput(e)}
          />
        </CardContent>

        <CardActions className="row">
          <div className="d-flex justify-content-between">
            <div id="tweetIconRow">
              <IconButton>
                <PhotoSizeSelectActualIcon />
              </IconButton>
              <IconButton>
                <GifBoxIcon />
              </IconButton>
              <IconButton>
                <EmojiEmotionsIcon />
              </IconButton>
            </div>
            <div id="tweetPostButton">
              <Button
                sx={{ borderRadius: 50 }}
                variant="contained"
                color="primary"
                onClick={(e) => postVibe(e)}
              >
                Vibe
              </Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </Box>
  );
}

export default TweetBox;
