import { Box, Button, TextField, Typography } from "@mui/material"
import Image from "next/image"
import { FC } from "react"

const Footer: FC = () => {

  return (
    <Box sx={{
      mt: 5,
      p: 5,
    }}>
      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          textAlign: { xs: 'center' }
        }}
      >
        {/* First */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 },
          textAlign :{md : 'left' , xs :'center'}
        }}
        >
          <Image src={'/logo-white.svg'} width={200} height={54} alt="" />
          <Box  textAlign={{md : 'left' , xs :'center'}}>

            <Typography  mb={1}>Hackers</Typography>
            <Typography  mb={1}>Business</Typography>
            <Typography  mb={1}>University</Typography>

          </Box>


        </Box>
        {/* Sec */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 }
        }}
        >
          <Typography fontSize={'16px'} fontWeight={500} mb={2}>Company</Typography>

          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>About</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Jobs</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Newsroom</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Adversiting</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Contact us</Typography>


        </Box>
        {/* Third */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 }
        }}
        >
          <Typography fontSize={'16px'} fontWeight={500} mb={2}>Products</Typography>

          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Australia</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>New Zealand</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>United States America (USA)</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Greece</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Maldives</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Singapore</Typography>



        </Box>
        {/* Fourth */}
        {/* FIfth */}
        <Box sx={{
          width: { md: '20%', xs: '100%' },
          mb: { xs: 3 }
        }}
        >
          <Typography fontSize={'16px'} fontWeight={500} mb={2}>Resourses</Typography>

          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Support</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Cancel your bookings</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Use Coupon</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>Refund Policies</Typography>
          <Typography fontSize={'14px'} color={'rgb(155,167,182)'} mb={1}>International Travel Documents</Typography>



        </Box>



      </Box>


    </Box>
  )
}

export default Footer