import { Box, Modal, TextField, Typography } from '@mui/material'
import React from 'react'

type Props = {
    open: boolean;
    handleClose: () => void;
}



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CreateGameModal = (props: Props) => {
    const [open, setOpen] = React.useState(false);
  return (
    <div>
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create New Game
        </Typography> <br />
        <TextField placeholder='Name Max 20' variant='filled' fullWidth/> <br /> <br />
        <TextField placeholder='Price' type={'number'} variant='filled' fullWidth InputProps={{ inputProps: {min: 0, max: 10 }}}/> <br /> <br />
        <TextField placeholder='Category' variant='filled' fullWidth/>
      </Box>
    </Modal>
    </div>
  )
}

export default CreateGameModal