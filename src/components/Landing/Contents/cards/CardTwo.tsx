import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface CardTwoProps {
  src: string;
  title: string;
  desc: string;
}

function CardTwo({ src, title, desc }: CardTwoProps) {
  return (
    <Card sx={{ width: {md:'32%' , xs : '100%'} , bgcolor : '#111927' , mb : {xs: 3 , md : 0}}}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={src} alt={title} />
        <CardContent>
          <Typography gutterBottom  component="div" color={'rgb(164,177,205)'}>
            {title}
          </Typography>
          <Typography variant="body2" color="white">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardTwo;
