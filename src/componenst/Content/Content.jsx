import React from 'react';
import { Container, Typography, Grid, Box, Button } from '@mui/material';
import { grey, brown } from '@mui/material/colors';

import styles from './Content.module.css';

const Content = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ mt: 10 }}>
          <div className={styles.text}>
            <Typography sx={{ color: grey[50] }} variant="h4" align="center" gutterBottom>
              About Heroes of Might & Magic V
            </Typography>

            <Typography sx={{ color: grey[50] }} variant="h5" align="center" paragraph color="initial" gutterBottom>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae nisi officiis saepe veniam recusandae eaque nostrum labore ex natus fugiat, dolorem blanditiis at consectetur adipisci quisquam error sit! Corporis!
            </Typography>
          </div>
        </Box>

        <div >
          <Grid container spacing={2} justifyContent="center">
            <Grid item >
              <Button sx={{ bgcolor: brown[500] }} variant="contained">Start Now</Button>
            </Grid>
            <Grid item >
              <Button sx={{ color: brown[600], borderColor: brown[600] }} variant="outlined">Learn More</Button>
            </Grid>
          </Grid>
        </div>
      </Container>

    </>
  );
};

export default Content;