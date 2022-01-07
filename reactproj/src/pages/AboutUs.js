import React from 'react';
import { makeStyles, Typography, Grid, Box} from '@material-ui/core';
import bg2 from '../components/images/bg2.png';
import PageTitle from '../components/PageTitle';

const useStyles = makeStyles((theme) => ({
   aboutUsBg: {
      backgroundImage: `url(${bg2})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop: '-1.2rem',
      minHeight: '100vh',
   },

   header: {
      color: '#ffe3fe',
      marginLeft: '10rem',
      padding: '3rem 0 1.5rem 0',
      [theme.breakpoints.down('md')]: {
         paddingTop: '5rem',
         marginLeft: '5rem',
      },
      [theme.breakpoints.down('sm')]: {
         textAlign: 'center',
      },
   },
   pageDescription: {
      color: '#ffe3fe',
      lineHeight: '2rem',
      marginLeft: '10rem',

      [theme.breakpoints.down('md')]: {
         width: '90%',
         margin: 'auto',
         textAlign: 'center',
         padding: '1rem',
      },
   },
   box1: {
      width: '150px',
      height: '150px',
      backgroundColor: '#d74d63',
      margin: '2rem 0 0 4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffe3fe',
      [theme.breakpoints.down('md')]: {
         marginTop: '5rem',
      },
      [theme.breakpoints.down('sm')]: {
         margin: 'auto',
      },
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
   },
   box2: {
      width: '200px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#ffe3fe',
      marginLeft: '-8.5rem',
      color: '#440a67',
      [theme.breakpoints.down('sm')]: {
         display: 'none'
      },

      
   },
}));

function AboutUs() {
   const classes = useStyles();
   return (
      <div id="aboutUs" className={classes.aboutUsBg}>
         <Typography variant="h1" component="h1" className={classes.header}>
            About Us
         </Typography>

         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
               <Grid xs={12} md={8}>
                  <Typography className={classes.pageDescription} align="left">
                     "At vero eos et accusamus et iusto odio dignissimos ducimus
                     qui blanditiis praesentium voluptatum deleniti atque
                     corrupti quos dolores et quas molestias excepturi sint
                     occaecati cupiditate non provident, similique sunt in culpa
                     qui officia deserunt mollitia animi, id est laborum et
                     dolorum fuga. Et harum quidem rerum facilis est et expedita
                     distinctio. Nam libero tempore, cum soluta nobis est
                     eligendi optio cumque nihil impedit quo minus id quod
                     maxime placeat.
                  </Typography>
               </Grid>
               <Grid xs={12} md={4}>
                  <div className={classes.box1}>
                     <Typography variant="h6" component="h4" align="center">
                        Accurate & Professional
                     </Typography>
                  </div>
                  <div className={classes.box2}>
                     <Typography variant="h5" component="h4" align="center">
                        Custom Sheet Music
                     </Typography>
                  </div>
               </Grid>
            </Grid>
         </Box>
      </div>
   );
}

export default AboutUs;
