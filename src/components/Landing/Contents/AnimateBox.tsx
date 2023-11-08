import React from 'react';
import { Box, Typography } from '@mui/material';

const AnimateBox = () => {

  const topBoxStyle = {
    width: {md :'47%' ,xs :'100%'},
    mb:{xs :3} ,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    pt: '15%',
    boxShadow: 3,
    height: '360px',
    backgroundImage: 'url("/chess.png") , linear-gradient(to right, #1A2332, #1A2332)',
    backgroundPositionY: '-200px',
    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
  };

  const bottomBoxStyle = {
    width: '100%',
    // backgroundPosition: { md: 'left', xs: 'top' },
    backgroundImage: 'url("/chess.png") , linear-gradient(to right, #1A2332, #1A2332)',
    backgroundPositionX: '-380px',
    backgroundRepeat: 'repeat',
    pt: {xs :'10%' , md :0},

    backgroundSize: 'cover',
    height: '300px',
    boxShadow: 3,

    transition: 'transform 0.5s',
    '&:hover': {
      transform: 'translateY(-10px)',
      mt:{xs : -3 , md: 0}
    },
  };

  const textStyleTitleTop = {
    margin: '10px 0',
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: 'center'
  };
  const textStyleTitleBottom = {
    margin: '10px 0',
    fontSize: '36px',
    fontWeight: 'bold',
    textAlign: {md :'left' ,xs : 'center'},
  };
  const textStyleDesc = {
    color: '#a4b1cd',
    fontSize: '18px',
    fontWeight: '700',
    textAlign: 'center'
  };
  const textStyleDescBottom = {
    color: '#a4b1cd',
    fontSize: '18px',
    fontWeight: '700',
    textAlign: {md :'left' ,xs : 'center'},
  };
  const textStyleButton = {
    fontSize: '18px',
    fontWeight: '700',
    textAlign: 'center',
    mt: 2
  };
  const textStyleButtonBottom = {
    fontSize: '18px',
    fontWeight: '700',
    textAlign: {md :'left' ,xs : 'center'},
    mt: 2
  };
  const styleBottomTwo = {
    width: {md : '50%' , xs: '100%'},
    mt: {md: '10%' , xs :0},
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    float: {md :'right' , xs: 'none'},
    textAlign: {md : 'left' ,xs : "center"}

  };

  return (
    <Box sx={{
      width: {md :'60%' , xs :'90%'},
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      mx: 'auto',

    }}>
      <Box sx={{ display: {md: 'flex' ,xs :'block'}, width: '100%', justifyContent: 'space-between', mb: 5 }}>
        <Box
          sx={topBoxStyle}>
            <Typography sx={textStyleTitleTop}>For Business</Typography>
            <Typography sx={textStyleDesc}>One solution for developing cybersecurity <br /> skills across your entire IT team</Typography>
            <Typography sx={textStyleButton}>Get Demo</Typography>
        </Box>
        <Box sx={topBoxStyle}>
          <Typography sx={textStyleTitleTop}>For Hackers</Typography>
          <Typography sx={textStyleDesc}>One solution for developing cybersecurity <br /> skills across your entire IT team</Typography>
          <Typography sx={textStyleButton}>Join for Free</Typography>


        </Box>
      </Box>
      <Box sx={bottomBoxStyle}>
        <Box sx={styleBottomTwo}>

          <Typography sx={textStyleTitleBottom}>Universities</Typography>
          <Typography sx={textStyleDescBottom}>A huge library of educational content to help your students put theory into practice</Typography>
          <Typography sx={textStyleButtonBottom}>Enroll for Free</Typography>

        </Box>
      </Box>
    </Box>
  );
};

export default AnimateBox;
