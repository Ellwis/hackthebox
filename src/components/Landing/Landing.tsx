import { FC, useState } from 'react'
import Header from '../Header/Header'
import { Box, Button, Chip, Typography ,Grid, Paper } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '../Footer/Footer'
import Image from 'next/image'
import AnimateBox from './Contents/AnimateBox';
import Brands from './Contents/Brands';
import SectionOne from './Contents/SectionOne';


const Landing: FC = () => {
  const [hover, setHover] = useState(false)
  const hoverFunction = () => {
    setHover((hover) => !hover)
  }
  return (
    <>
      <Header />

      <Box
        sx={{
          width: '90%',
          mx: 'auto',
          textAlign: 'center',


        }}>
      </Box>
      <Box
       sx={{
        mt: '96px',
        backgroundImage : 'url(/bg-hero.svg)',
        backgroundSize :'cover',
        p:5


      }}>
        <Box sx={{ transition: '500px', display: 'flex', alignItems: 'center', bgcolor: '#1A2332', borderRadius: '40px',width :{md:'600px' ,xs :'90%'} , mx: 'auto', p: 1, '&:hover': { color: 'rgb(154,233,1)' } }}>
          <Chip label={'NEW'} sx={{ color: '#9FEF00', bgcolor: '#27372D', height: '20px' }} />
          <Typography sx={{ textAlign :'center' ,transition:'500ms', color: '#a4b1cd', ml: 1, fontSize: '14px', '&:hover': { color: 'rgb(154,233,1)' } }}>Join the biggest cybersecurity event for Universities! More than $65,000 in prizes </Typography>
          <ArrowForwardIosIcon sx={{ fontSize: '10px', ml: '1px' }} />
        </Box>

        <Typography sx={{fontSize : '58px' , lineHeight : '65px' ,textAlign : 'center' , fontWeight :'bold' , mt: '80px'}} >The #1 cybersecurity <br />upskilling platform.</Typography>
        <Typography sx={{ textAlign :'center' , fontSize :'20px' ,color : '#a4b1cd', py: 5}} >Hack The Box gives individuals, businesses and universities the tools they need to <br />
          continuously improve their cybersecurity capabilities — all in one place.</Typography>
      <AnimateBox />
      </Box > 
      <Brands />
      <Typography textAlign={'center'} color={'#a4b1cd'} mb={5} p={{xs : 5 , md: 0}}>Trusted by the world’s most ambitious cybersecurity teams.</Typography>
      <SectionOne />
      {/* <Footer /> */}

    </>
  )

}

export default Landing