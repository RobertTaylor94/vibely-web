import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

function ListViewProfile() {
  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem sx={{ padding: 0, marginBottom: '10px'}}>
          <ListItemAvatar>
            <Avatar alt="A" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline'}}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" started following you"}
              </>
            }
          />
        </ListItem>

        <ListItem sx={{ padding: 0, marginBottom: '10px'}}>
          <ListItemAvatar>
            <Avatar alt="S" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
        <ListItemText
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Scott Laine
              </Typography>
              {" liked your photo"}
            </>
          }
        />
      </ListItem>
      <ListItem sx={{ padding: 0, marginBottom: '10px'}}>
        <ListItemAvatar>
          <Avatar alt="S" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {" liked your photo"}
            </>
          }
        />
      </ListItem>
    </List>
    </div>
  )
}

export default ListViewProfile
