import Image from 'next/image'
import React from 'react'
import {Box } from '@mui/material'

function Brands() {
  const sources = [

    { url: '/1.svg' },
    { url: '/2.svg' },
    { url: '/3.svg' },
    { url: '/4.svg' },
    { url: '/5.svg' },
    { url: '/6.svg' }


  ]
  return (
    <Box sx={{width :'90%' , display : {md : 'flex' , xs : 'block'} , justifyContent :'space-between' , mx :'auto' }}>
      {
        sources.map((src) => {
          return (
            <Box sx={{width :{md : '15%' , xs : '100%'} , textAlign : 'center' , mx :'auto'}}>
              <Image src={src.url} width={200} height={200} alt='' />
            </Box>
          )
        }

        )
      }


    </Box>
  )
}

export default Brands