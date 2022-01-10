import React from 'react';
import logo from './images/logo.png';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import {
   AppBar,
   Toolbar,
   CssBaseline,
   makeStyles,
   useTheme,
   useMediaQuery,
} from '@material-ui/core';
import DrawerComponent from './Drawercomponent';

const useStyles = makeStyles((theme) => ({
   navbar: {
      backgroundColor: '#440a67',
   },
   navlink: {
      marginLeft: theme.spacing(60),
      display: 'flex',
   },
   logo: {
      cursor: 'pointer',
      marginLeft: theme.spacing(5),
   },
   link: {
      textDecoration: 'none',
      color: '#ffe3fe',
      fontSize: '1rem',
      marginLeft: theme.spacing(3),
      backgroundImage: 'linear-gradient(90deg, #d74d63, #d74d63)',

      backgroundSize: '0% 0.2rem',
      backgroundPosition: 'left bottom',
      backgroundRepeat: 'no-repeat',
      transition: 'background-size 300ms ease-in-out',
      '&:hover': {
         backgroundSize: '100% 0.2rem',
         color: '#ffe3fe',
      },
   },
}));

function Navbar() {
   const classes = useStyles();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   return (
      <AppBar position="sticky" className={classes.navbar}>
         <CssBaseline />
         <Toolbar>
            <NavLink className="nav-link" to="/E-com-groupproj">
               <img src={logo} alt="Company Logo" className={classes.logo} />
            </NavLink>
            {isMobile ? (
               <DrawerComponent />
            ) : (
               <div className={classes.navlink}>
                     <NavLink
                     className="nav-link"
                     to="/addProduct"
                     className={classes.link}
                  >
                     AddSong
                  </NavLink>
                  <NavLink
                     className="nav-link"
                     to="/account"
                     className={classes.link}
                  >
                     Account
                  </NavLink>
                  <NavLink
                     className="nav-link"
                     to="/E-com-groupproj"
                     className={classes.link}
                  >
                     Home
                  </NavLink>

                  <Link
                     to="services"
                     className={classes.link}
                     activeClass="active"
                     spy={true}
                     smooth={true}
                     offset={-60}
                     duration={500}
                  >
                     Services
                  </Link>

                  <Link
                     to="aboutUs"
                     className={classes.link}
                     activeClass="active"
                     spy={true}
                     smooth={true}
                     offset={-60}
                     duration={500}
                  >
                     About Us
                  </Link>
                  <NavLink
                     className="nav-link"
                     to="/transcription"
                     className={classes.link}
                  >
                     Transcription
                  </NavLink>

                  <NavLink to="/faq" className={classes.link}>
                     FAQs
                  </NavLink>
                  <NavLink
                     className="nav-link"
                     to="/logIn"
                     className={classes.link}
                  >
                     Login
                  </NavLink>

                  <Link
                     to="contactUs"
                     className={classes.link}
                     activeClass="active"
                     spy={true}
                     smooth={true}
                     offset={-60}
                     duration={500}
                  >
                     Contact Us
                  </Link>
               
               
               </div>
            )}
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;
