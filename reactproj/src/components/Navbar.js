import React from 'react';
import swal from 'sweetalert';
import logo from './images/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';

import { Link } from 'react-scroll';
import {
   AppBar,
   Toolbar,
   CssBaseline,
   makeStyles,
   useTheme,
   useMediaQuery,
   Button,
} from '@material-ui/core';
import DrawerComponent from './Drawercomponent';
import axios from 'axios';

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
      cursor: 'pointer',

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
   const history = useNavigate();

   const logoutSubmit = (e) => {
      e.preventDefault();

      axios.post(`/api/logout`).then((res) => {
         if (res.data.status === 200) {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            swal('Success', res.data.message, 'Success');
            history('/');
         }
      });
   };
   var AuthButtons = '';
   if (!localStorage.getItem('auth_token')) {
      AuthButtons = (
         <ul>
            <li>
               <NavLink to="/login">Login</NavLink>
            </li>
            <li>
               <NavLink to="/register">Register</NavLink>
            </li>
         </ul>
         // <>
         //    {' '}
         //    <NavLink className="nav-link" to="/logIn" className={classes.link}>
         //       Login
         //    </NavLink>
         //    <NavLink
         //       className="nav-link"
         //       to="/register"
         //       className={classes.link}
         //    >
         //       Register
         //    </NavLink>
         // </>
      );
   } else {
      AuthButtons = (
         <Button variant="text" type="button" onClick={logoutSubmit}>
            Logout
         </Button>
      );
   }

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
                  <NavLink to="/" className={classes.link}>
                     Home
                  </NavLink>

                  <NavLink
                     className="nav-link"
                     to="/aboutUs"
                     className={classes.link}
                  >
                     About Us
                  </NavLink>
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
                     to="/contactUs"
                     className={classes.link}
                  >
                     Contact Us
                  </NavLink>
                  <NavLink
                     className="nav-link"
                     to="/admin"
                     className={classes.link}
                  >
                     Admin
                  </NavLink>
                  {AuthButtons}
               </div>
            )}
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;
