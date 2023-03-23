import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar1 from '../assets/avatars/avatar1.png';
import Avatar2 from '../assets/avatars/avatar2.png';
import Avatar3 from '../assets/avatars/avatar3.png';
import Avatar4 from '../assets/avatars/avatar4.png';
import Avatar5 from '../assets/avatars/avatar5.png';
import Avatar6 from '../assets/avatars/avatar6.png';
import Avatar7 from '../assets/avatars/avatar7.png';
import Avatar8 from '../assets/avatars/avatar8.png';


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
            src={Avatar1}
            sx={{ width: 56, height: 56, border: '3px solid black' }}
          />
          <Avatar
            alt="Sharp"
            src={Avatar2}
            sx={{ width: 56, height: 56, border: '3px solid #FA9' }}
          />
          <Avatar
            alt="D"
            src={Avatar3}
            sx={{ width: 56, height: 56, border: '3px solid #FA9' }}
          />
          <Avatar
            alt="M"
            src={Avatar4}
            sx={{ width: 56, height: 56, border: '3px solid #FA9' }}
          />
          <Avatar
            alt="Remy Sharp"
            src={Avatar5}
            sx={{ width: 56, height: 56, border: '3px solid #FA9'}}
          />
          <Avatar
            alt="T"
            src={Avatar6}
            sx={{ width: 56, height: 56, border: '3px solid #FA9' }}
          />
          <Avatar
            alt="L"
            src={Avatar7}
            sx={{ width: 56, height: 56, border: '3px solid #FA9' }}
          />
          <Avatar
            alt="O"
            src={Avatar8}
            sx={{ width: 56, height: 56, border: '3px solid #FA9' }}
          />
        </Stack>
      </Card>
    </>
  )
}

export default StoriesBar
