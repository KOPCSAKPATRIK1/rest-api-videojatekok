import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { width } from '@mui/system';
import React, { useState } from 'react'
import { GameDto } from '../api/dto/game.dto';
import { VideoGameApi } from '../api/videoGame.api';

type Props = {
    open: boolean;
    handleClose: () => void;
    onGameCreated: (game: GameDto) =>  void;
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

const buttonStyle = {
  marginTop: 5,
  justifyContent: 'center',
  width: "100%"
}

const CreateGameModal = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');

    const createGame = async () => {
      const resp = await VideoGameApi.createOne({
        name,
        price,
        category
      });

      props.onGameCreated(resp)
    }
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
        <TextField 
          placeholder='Name (max 20)' 
          variant='filled' 
          fullWidth
          onChange={(e) => setName(e.target.value)}/> <br /> <br />
        <TextField 
          placeholder='Price' 
          type={'number'} 
          variant='filled' 
          fullWidth InputProps={{ inputProps: {min: 0, max: 10 }}}
          onChange={(e) => setPrice(parseInt(e.target.value))}/> <br /> <br />
        <TextField
          placeholder='Category'
          variant='filled' 
          fullWidth
          onChange={(e) => setCategory(e.target.value)}/>
        <Button 
          sx={buttonStyle}
          color='primary' 
          variant='contained'
          onClick={createGame}>
          Create
          </Button>
      </Box>
    </Modal>
    </div>
  )
}

export default CreateGameModal