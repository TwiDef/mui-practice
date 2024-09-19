import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { brown } from '@mui/material/colors';

const ModalWindow = ({ isOpen, handleClose }) => {

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Log in</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Log in for more information
        </DialogContentText>
        <TextField
          autoFocus
          required
          color='none'
          margin="dense"
          id="email"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />

        <TextField
          autoFocus
          required
          color='none'
          margin="dense"
          id="password"
          name="password"
          label="Password"
          type="password"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: brown[700] }} onClick={handleClose}>Cancel</Button>
        <Button sx={{ color: brown[700] }} type="submit">Log In</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalWindow;