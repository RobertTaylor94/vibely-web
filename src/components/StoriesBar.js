import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function StoriesBar() {

  // ADD FAKER MAP TO GENERATE STORIES

  return (
    <>
      <Card sx={{ paddingTop: 5, paddingBottom: 5, marginBottom: 5}}>
        <Typography sx={{ fontSize: 20, marginLeft: 5 }} color="text.secondary" gutterBottom>
           Stories
        </Typography>
        <Stack sx={{marginRight: 5, marginLeft: 5}} direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid black' }}
          />
          <Avatar
            alt="Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid blue' }}
          />
          <Avatar
            alt="D"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid blue' }}
          />
          <Avatar
            alt="M"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid blue' }}
          />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid blue'}}
          />
          <Avatar
            alt="T"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid blue' }}
          />
          <Avatar
            alt="L"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid blue' }}
          />
          <Avatar
            alt="O"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56, border: '3px solid blue' }}
          />
        </Stack>
      </Card>
    </>
  )
}

export default StoriesBar
