import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function SectionOne() {
  const datas = [
    {
      title: 'Top-quality content',
      desc: 'Created by hackers for hackers',
      img: '/why-1.svg'
    },
    {
      title: 'Engaging & gamifie',
      desc: 'Learn by doing, learn by playing',
      img: '/why-2.svg'
    },
    {
      title: 'Hacking community',
      desc: 'Anyone can learn, from zero to hero',
      img: '/why-3.svg'
    }
  ]
  return (
    <Box sx={{ mx: 'auto', width: '100%' , p:5  , bgcolor :'#0D1522'}}>
      <Box sx={{ width: {md:'30%' ,xs: '100%'}, mx: "auto", textAlign: 'center', mb: 5 }}>
        <Image src={'/cube.svg'} width={50} height={50} alt={''} style={{ marginBottom: 3 }} />
        <Typography variant='h4' fontWeight={'bold'} mb={2}>Why Hack The Box?</Typography>
        <Typography fontSize={'20px'} color={'#a4b1cd'}>Upskilling cyber superhumans since 2017.</Typography>
      </Box>
      <Box sx={{ width: '100%', display: {md: 'flex' , xs :'block'}, justifyContent: 'space-between' }}>
        {
          datas.map((data) => {
            return (
              <>
                <Box sx={{ bgcolor: '#1A2332', width: {md :'32%' ,xs : '100%'}, borderRadius: '10px', boxShadow: 3, textAlign: 'center', p: 5, mb: 3 }}>
                  <Image src={data.img} width={260} height={260} alt={''} style={{ marginBottom: 3 }} />
                  <Typography fontSize={'24px'} fontWeight={'bold'} mb={2}>{data.title}</Typography>
                  <Typography color={'rgb(164,177,205)'}>{data.desc}</Typography>
                </Box>

              </>
            )

          })
        }
      </Box>
      <Box sx={{
        backgroundImage: 'url(/oulines-bg.svg)',
        backgroundSize: 'cover',
        width: '100%',
        height: {md : '170px' , xs :"auto"},
        border: '1px solid rgb(26,35,50)',
        borderRadius: '10px',
        boxShadow: 3,
        mb: 5
      }}>
        <Box sx={{
          width: {md :'40%' , xs: '100%'},
          mx: 'auto',
          mt: '20px',
          textAlign: 'center',
          py: {xs: 3 ,md :0}
        }}>
          <Typography variant='h3' sx={{ color: 'rgb(159,239,0)', fontWeight: 'bold' }}>
            2.3m learners|
          </Typography>
          <Typography variant='h6' sx={{mt :2}}>
            Be part of the HTB Community. Get involved.
          </Typography>


        </Box>
      </Box>
    </Box>
  )
}

export default SectionOne