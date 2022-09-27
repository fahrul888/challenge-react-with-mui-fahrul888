import { Divider, Typography } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography variant='h3'>CALL A FRIEND</Typography>
      <br />
      <Divider sx={{marginBottom:'5em',}}>
        <Typography>Your Friendly Contact App</Typography>
      </Divider>
    </>
  );
};

export default Header;