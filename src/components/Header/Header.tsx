import { Box, Button, TextField, Typography, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import TemporaryDrawer from "./Drawer";
import { headerTitles } from "./headerTitles";
import DrawerCustom from "./Drawer";

const Header: FC = () => {


  return (
    <Box>
      {/* TOP */}
      <Box sx={{
        display: 'flex',
        justifyContent :'space-between',
        px: {md : 10 , xs : 3},
        width: '100%',
        height: '100px',
        alignItems: 'center',
        mx: 'auto',
        zIndex : '111',
        bgcolor  : '#111927',

      }}>
        <Box

          sx={{
            width: { md: '25%', xs: '45%' },
            textAlign: { md: 'left', xs: 'left' },
            cursor: 'pointer'
          }} >
          <Link href={'/'}>
            <Image alt="logo" src={'/logo.svg'} height={33} width={176} />

          </Link>

        </Box>
        <Box
          sx={{
            width: '35%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-evenly',
            visibility: { md: 'visible', xs: 'hidden' }
          }}
        >
          {
            headerTitles.map((item)=>{
              return(<Typography  sx={{transition :'500ms' , cursor :'pointer' ,color:'#a4b1cd' , '&:hover' : {color :'white'} , px: 1}}>{item}</Typography>)

            })
          }




        </Box>
        <Box
          sx={{
            width: '25%',
            display: 'flex',
            justifyContent : 'flex-end'
          }}
        >
          <Box sx={{display : {md : 'flex' , xs : 'none'} , alignItems :'center'}}>
            <Typography  sx={{ color :'#a4b1cd' ,bgcolor :'none', '&:hover' :{opacity : 0.8  , background :'none'}}}>Sign in</Typography>
            <Button href="#" sx={{ mx: 1, bgcolor :'rgb(159,239,0)' , color : 'black', p : '10px 2vw' }} >Get Started</Button>
          </Box>
          <Box sx={{display : {md : 'none' , xs : 'block'} , mr : 3}}>
            <DrawerCustom/>
          </Box>



        </Box>
      </Box>
    </Box>
  )

}


export default Header