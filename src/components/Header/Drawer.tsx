import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { headerTitles } from "./headerTitles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function DrawerCustom() {
  const [DrawerOpen, setDrawerOpen] = useState(false);


  const list = (
    <Box
      sx={{ width: '300px', direction: 'rtl', textAlign: 'right' ,bgcolor :'rgb(26,35,50)' ,overflowY :'hidden'}}
    >
      <List sx={{bgcolor:'rgb(26,35,50)' , height :'700px' }}>
        {
          headerTitles.map((item) => {
            return (
              <ListItem button sx={{'&:hover':{ background :'none'}}}>
                <ListItemText sx={{ textAlign: 'left', color: '#a4b1cd', fontWeight: '700' ,'&:hover' :{color : 'black'} }} primary={item} />
              </ListItem>
            )

          })
        }
      </List>
    </Box>
  );

  return (
    <Box > 
      <Button
        onClick={() => setDrawerOpen(true)}
        sx={{ color: 'white' , '&:hover' :{background :'none'} }}
      >
        {
          !DrawerOpen ? <MenuIcon /> : <CloseIcon />

        }
      </Button>
      <Drawer  open={DrawerOpen} onClose={() => setDrawerOpen(false)}>
        {list}
      </Drawer>
    </Box>
  );
}

export default DrawerCustom;