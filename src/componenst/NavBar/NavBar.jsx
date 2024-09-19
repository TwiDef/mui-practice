import React from 'react';

import { AppBar, Container, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { grey, brown } from '@mui/material/colors';

import ModalWindow from '../ModalWindow/ModalWindow';

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOpen = () => {
    setIsOpen(true);
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <AppBar position="fixed" sx={{ bgcolor: grey[800] }}>
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <WidgetsIcon />
          </IconButton>
          <Typography variant="h6" color="white">Heroes V</Typography>

          <Box sx={{ ml: "auto" }}>
            <Button
              onClick={handleOpen}
              variant="outlined"
              color="white">
              Log In
            </Button>
            <ModalWindow
              isOpen={isOpen}
              handleClose={handleClose
              } />
          </Box>

          <Button sx={{ ml: 3, bgcolor: brown[500] }} variant="contained">Sigh In</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;