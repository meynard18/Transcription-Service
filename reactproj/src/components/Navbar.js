import React from 'react';
import logo from './images/logo.png';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';
// import { useGlobalContext } from './Context'
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
   // const { amount } = useGlobalContext()
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
                     to="/E-com-groupproj"
                     className={classes.link}
                  >
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
                     to="/logIn"
                     className={classes.link}
                  >
                     Login
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

                  {/* <NavLink>
                     <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' />
                     </svg>
                     <div className='amount-container'>
                        <p className='total-amount'>{amount}</p>
                     </div>
                  </NavLink> */}
               </div>
            )}
         </Toolbar>
      </AppBar>

   );
}

export default Navbar;
