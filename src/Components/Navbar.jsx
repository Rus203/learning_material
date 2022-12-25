import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, InputBase, styled, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { Pets as PetsIcon, Mail as MailIcon, Notifications as NotificationsIcon } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled('div')({
  backgroundColor: 'white',
  borderRadius: '5px',
  width: '35%',
  padding: '0 10px'
})

const Icons = styled('div')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '15px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}))

const UserBox = styled('Box')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }} >Lama Dev</Typography>
        <PetsIcon sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search><InputBase placeholder="search..." /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
        <Badge badgeContent={7} color="error">
          <NotificationsIcon />
        </Badge>
        <Avatar
          sx={{ width: '35px', height: '35px' }}
          alt="Cindy Baker"
          src="https://images.pexels.com/photos/8566465/pexels-photo-8566465.jpeg"
          onClick={e => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: '35px', height: '35px' }}
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/8566465/pexels-photo-8566465.jpeg" >
          </Avatar>
          <Typography variant="span">Freeman</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar
