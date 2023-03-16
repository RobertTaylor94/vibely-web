import { IconButton, Box, Avatar, Card, CardActions, CardContent, Button, TextField } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import GifBoxIcon from '@mui/icons-material/GifBox';

function TweetBox() {
  return (
    <Box
      component="form"
      autoComplete="off"
    >
      <Card sx={{ height: 130 }}>

        <CardContent className="row d-flex flex-nowrap justify-content-around">
          <Avatar>D</Avatar>
          <TextField
            sx={{ maxWidth: '85%' }}
            placeholder="What's on your mind?"
            variant="standard"
          />
        </CardContent>

        <CardActions className="row">
          <div className="d-flex justify-content-between">
            <div id="tweetIconRow" >
              <IconButton><PhotoSizeSelectActualIcon/></IconButton>
              <IconButton><GifBoxIcon/></IconButton>
              <IconButton><EmojiEmotionsIcon /></IconButton>
            </div>
            <div id="tweetPostButton">
              <Button
                sx={{ borderRadius: 50 }}
                variant="contained"
                color="primary"
                href="#contained-buttons">
                Vibe
              </Button>
            </div>
          </div>
        </CardActions>

      </Card>
    </Box>
  )
}

export default TweetBox
