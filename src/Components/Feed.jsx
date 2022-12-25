import React from 'react'
import Post from './Post'
import { Box } from '@mui/material'

const Feed = () => {
  return (
    <Box p={1} flex={4}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed
