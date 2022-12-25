import React from 'react'
import { Stack } from '@mui/material'

import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import RightBar from './Components/RightBar'
import SideBar from './Components/SideBar'

function App () {
  return (
    <div className='App'>
        <Navbar />
        <Stack direction="row" justifyContent="space-evenly" spacing={2}>
          <RightBar />
          <Feed />
          <SideBar />
        </Stack>
    </div>
  )
}

export default App
