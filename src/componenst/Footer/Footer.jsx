import React from 'react';
import { Typography } from "@mui/material";
import { grey } from '@mui/material/colors';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from './Footer.module.css';

const Footer = () => {

  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <footer>
      <Typography
        variant="h6"
        textAlign="center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>

      <BottomNavigation
        value={value}
        onChange={handleChange}
        sx={{ bgcolor: grey[500] }}>

        <BottomNavigationAction
          className={styles.label}
          label="Recents"
          value="recents"
          icon={<RestoreIcon />}
        />

        <BottomNavigationAction
          className={styles.label}
          label="Favorites"
          value="favorites"
          icon={<FavoriteIcon />}
        />

        <BottomNavigationAction
          className={styles.label}
          label="Nearby"
          value="nearby"
          icon={<LocationOnIcon />}
        />

        <BottomNavigationAction
          className={styles.label}
          label="Folder"
          value="folder"
          icon={<FolderIcon />} />
      </BottomNavigation>

    </footer>


  );
};

export default Footer;