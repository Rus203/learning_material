import React from 'react'
import { Stack } from '@mui/material'

import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import RightBar from './Components/RightBar'
import SideBar from './Components/SideBar'
import Add from './Components/Add'

function App () {
  return (
    <div className='App'>
        <Navbar />
        <Stack direction="row" justifyContent="space-between" >
          <SideBar />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
    </div>
  )
}

export default App
