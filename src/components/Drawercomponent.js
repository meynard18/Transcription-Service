import React, { useState } from 'react';

import {
   Divider,
   Drawer,
   IconButton,
   List,
   ListItem,
   ListItemText,
   makeStyles,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
   link: {
      textDecoration: 'none',
      color: '#93329e',
      fontSize: '18px',
   },
   icon: {
      
      color: 'white',
   },

}));

function DrawerComponent() {
   const classes = useStyles();
   const [openDrawer, setOpenDrawer] = useState(false);

   return (
      <>
         <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="right"
         >
            <List>
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link className={classes.link} to="/E-com-groupproj">
                        Home
                     </Link>
                  </ListItemText>
               </ListItem>
               <Divider />

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <HashLink
                        className={classes.link}
                        to="/E-com-groupproj#services"
                     >
                        Services
                     </HashLink>
                  </ListItemText>
               </ListItem>
               <Divider />

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <HashLink
                        className={classes.link}
                        to="/E-com-groupproj#aboutUs"
                     >
                        About Us
                     </HashLink>
                  </ListItemText>
               </ListItem>
               <Divider />
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <HashLink
                        className={classes.link}
                        to="/E-com-groupproj#aboutUs"
                     >
                        Transcriptions
                     </HashLink>
                  </ListItemText>
               </ListItem>
               <Divider />

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link to="/faq" className={classes.link}>
                        FAQ
                     </Link>
                  </ListItemText>
               </ListItem>
               <Divider />

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link className={classes.link} to="/logIn"  className={classes.link}>
                        Login
                     </Link>
                  </ListItemText>
               </ListItem>
               <Divider />

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <HashLink
                        className={classes.link}
                        to="/E-com-groupproj#contactUs"
                     >
                        Contact Us
                     </HashLink>
                  </ListItemText>
               </ListItem>
               <Divider />
            </List>
         </Drawer>
         <IconButton
            className={classes.icon}
            onClick={() => setOpenDrawer(!openDrawer)}
         >
            <MenuIcon />
         </IconButton>
      </>
   );
}

export default DrawerComponent;
