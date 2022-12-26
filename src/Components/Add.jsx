import { Box, Fab, Modal, Tooltip, Typography, styled, Avatar, TextField, Stack } from '@mui/material'
import {
  Add as AddIcon, EmojiEmotions as EmojiEmotionsIcon,
  PersonAdd as PersonAddIcon, OndemandVideo as OndemandVideoIcon,
  Image as ImageIcon
} from '@mui/icons-material'
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const UserBox = styled(Box)({
  marginTop: '15px',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px'
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
  <>
    <Tooltip title="Add" onClick={e => setOpen(true)} sx={{ position: 'fixed', bottom: '25px', left: { xs: 'calc(50% - 25px)', md: '30px' } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
    <StyledModal
      open={open}
      onClose={e => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box width='60%' height='60%' bgcolor='white' p='20px' borderRadius='10px' >
        <Typography variant='h6' color='gray' textAlign='center'>Create post</Typography>
        <UserBox>
          <Avatar
            sx={{ width: '35px', height: '35px' }}
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/8566465/pexels-photo-8566465.jpeg" >
          </Avatar>
          <Typography variant="span" fontWeight={500}>Freeman</Typography>
        </UserBox>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          variant="standard"
          placeholder="Hey, What's up?"
          sx={{ width: '90%' }}
        />
        <Stack direction="row" gap={2} mt={2}>
          <EmojiEmotionsIcon color='primary' />
          <ImageIcon color='secondary' />
          <PersonAddIcon color='success' />
          <OndemandVideoIcon color='error' />
        </Stack>
      </Box>
  </StyledModal>
</>
  )
}

export default Add
