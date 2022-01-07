import { makeStyles, Typography, Grid, Button } from '@material-ui/core';
import React from 'react';
import Services from '../pages/Services';
import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';
import music from '../components/images/music.jpg';
import PageTitle from '../components/PageTitle';
// import Team from './Team';
// import Footer from './Footer';
import ReadBtn from '../components/Btn';
import { Link } from 'react-scroll';
const useStyles = makeStyles(() => ({
   hero: {
      height: '100vh',
      backgroundImage: `url(${music})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },

   header: {
      paddingTop: '4rem',
      color: '#ffe3fe',
   },

   link: {
      textDecoration: 'none',
   },
}));

function Home() {
   const classes = useStyles();

   return (
      <>
         <div id="home">
            <Grid className={classes.hero}>
               <Grid xs={12}>
                  <Typography
                     variant="h1"
                     component="h1"
                     className={classes.header}
                  >
                     <PageTitle title="Your #1 Music Transcription Service Online" />
                  </Typography>
               </Grid>
               <Grid xs={12}>
                  <Link
                     to="services"
                     className={classes.link}
                     activeClass="active"
                     spy={true}
                     smooth={true}
                     offset={-60}
                     duration={500}
                  >
                     <ReadBtn className={classes.centerEl} title="Read More" />
                  </Link>
               </Grid>
            </Grid>

            <Services />
            <AboutUs />
            {/* <Team /> */}
            {/* <ContactUs /> */}
            {/* <Footer /> */}
         </div>
      </>
   );
}

export default Home;
