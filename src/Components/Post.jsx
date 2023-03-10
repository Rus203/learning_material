import React from 'react'
import { Typography, Card, CardHeader, Avatar, IconButton, CardActions, CardMedia, CardContent, Checkbox }
  from '@mui/material'
import { MoreVert as MoreVertIcon, Share as ShareIcon, FavoriteBorder, Favorite }
  from '@mui/icons-material'

const Post = () => {
  return (
  <Card sx={{ marginTop: '10px', marginBottom: '25px' }}>
    <CardHeader avatar={
      <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
        R
      </Avatar>
    }
      action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="Shrimp and Chorizo Paella"
    subheader="December 25, 2022"
    />
    <CardMedia
      component="img"
      height="350"
      image="https://images.pexels.com/photos/8919190/pexels-photo-8919190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
}

export default Post
