import React from 'react';
import { Box, Typography, Link, Stack, Button } from '@mui/material';
import { grey, brown } from '@mui/material/colors';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import InfoIcon from '@mui/icons-material/Info';

import styles from './Card.module.css';

const Card = ({ item }) => {
  return (
    <Box
      className={styles.card}
      sx={{ boxShadow: 10 }}
      borderRadius="10px"
      width="250px"
      height="350px"
      bgcolor={grey[300]}>

      <div className={styles.imgWrapper}>
        <img className={styles.img} src={item.url} alt={item.name} />
      </div>

      <Box sx={{ p: 1, pt: 0 }}>
        <Typography variant="h6" color={grey[800]}>{item.name}</Typography>
        <Typography variant="body2" color={grey[800]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>

        <Stack sx={{ mt: 4, ml: 1 }} direction="row" gap={4}>
          <Stack direction="row" gap={1}>
            <Link href="#" color={brown[900]}>View</Link>
            <Link href="#" color={brown[900]}>About</Link>
          </Stack>

          <Stack direction="row" gap={1}>
            <RemoveRedEyeIcon sx={{ color: brown[900] }} />
            <InfoIcon sx={{ color: brown[900] }} />
          </Stack>
        </Stack>

      </Box>

    </Box>
  );
};

export default Card;