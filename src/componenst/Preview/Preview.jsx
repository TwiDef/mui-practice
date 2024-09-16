import React from 'react';

import { Paper, Container, Grid, Typography, Button } from "@mui/material";
import { grey, brown } from '@mui/material/colors';

import styles from './Preview.module.css';
import { Brightness1 } from '@mui/icons-material';

const Preview = () => {
  return (

    <Paper
      sx={{
        backgroundImage: `url(https://i.ytimg.com/vi/5pdW306PpLQ/maxresdefault.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
        pt: 2,
        pb: 2,
      }}>
      <Container fixed>
        <Grid container>
          <Grid item md={6}>
            <div className={styles.preview}>
              <Typography sx={{ color: grey[50], fontSize: 34, fontWeight: 600 }} component="h1" gutterBottom>
                Heroes of Might & Magic V
              </Typography>

              <Typography sx={{ color: grey[50] }} component="h5" paragraph>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit aperiam voluptate, cum est a perferendis atque in et, blanditiis quidem. Molestias corporis neque laborum incidunt perferendis commodi ut perspiciatis.
              </Typography>

              <Button variant="contained" sx={{ bgcolor: brown[500] }}>
                Learn more
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Paper >

  );
};

export default Preview;