import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

const RightBar = () => {
  return (
    <Box p={1} flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box width={200} >
        <Typography variant="h6" fontWeight={100} mt='10px' mb='10px'>Online friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/2891007/pexels-photo-2891007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/1205379/pexels-photo-1205379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/12088891/pexels-photo-12088891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2890852/pexels-photo-2890852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/264637/pexels-photo-264637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Jim Danson" src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt='20px' mb='20px'>Latest Photos</Typography>
        <ImageList
          sx={{ width: 300, height: 210 }}
          cols={2}
          rowHeight={100}
        >
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" alt="breakfast" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" alt="Burger"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" alt="camera"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c" alt="coffee"/>
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt='20px'>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar
