import React from 'react'
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'


function CardComponent() {
  return (
    <>
    <Card
      sx={{
        bgcolor: '#0B121F',
        borderRadius: 1,
        width: '400px',
        boxShadow: 3,
        color: '#a4b1cd',
        border: '1px solid #202837',
        mx: 2
      }}
    >
      <CardContent >
        <Typography variant="body2" sx={{ fontSize: 16 }}>
          Since I manage penetration testing in the company, I have to train our specialists in penetration testing from time to time to ensure that the quality of our results is high. I believe in the “learning by doing” principle, so I set up gamified labs and capture-the-flag competitions. We then introduced Hack The Box Academy to the team. The team can now quickly learn by themselves through the theoretical and practical side of penetration testing with very in-depth and up-to-date materials without the need for requested labs or challenges to be built for them. As of now, to spice up the learning, we have a “Hacker of the Month” where we recognize the most progressive employee in our Hack The Box platform.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'end',
          }}
        >
          <Avatar
            alt="Hack The Box"
            src="/images/landingv3/b2b_home/puma.svg"
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: 3
            }}
          >
            <Typography variant="body2" sx={{
              color: 'white', fontSize: 16,
              ml: 1
            }}>
              Alexis Lingad,{' '}
              <span>Information Security Analyst, PUMA SE</span>
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
    
    </>
  )
}

export default CardComponent