import * as React from 'react';
import {
   makeStyles,
   CardContent,
   Grid,
   Typography,
   Card,
   CardMedia,
} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import icon from './images/icon3.png';
import { StyledCard } from './Card.styled';

const cardContents = [
   {
      cardImg: icon,
      cardTitle: 'Personal Transcription',
      cardDescription:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
   },
   {
      cardImg: icon,
      cardTitle: 'Opm Transcriptions',
      cardDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
   },
   {
      cardImg: icon,
      cardTitle: 'Gospel Transcription',
      cardDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
   },
];

const useStyles = makeStyles((theme) => ({
   imageContainer: {
      height: '140px',
   },

   image: {
      height: '120px',
      width: '120px',
      padding: '1.5rem',
   },

   card: {
      background: '#ffe3fe',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },

   servicePage: {
      [theme.breakpoints.down('md')]: {
          marginBottom: '2rem',
      },
   },
}));

function CardComponent() {
   const classes = useStyles();

   return (
      <Grid
         container
         direction="row"
         justifyContent="center"
         spacing={8}
         className={classes.servicePage}
      >
         {cardContents.map((item) => (
            <Grid item xs={7} md={3}>
               <StyledCard sx={{ maxWidth: 250 }}>
                  <div className={classes.imageContainer}>
                     <CardMedia
                        component="img"
                        image={item.cardImg}
                        alt="icon"
                        className={classes.image}
                     />
                  </div>

                  <CardContent>
                     <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        align="center"
                     >
                        {item.cardTitle}
                     </Typography>
                     <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                     >
                        {item.cardDescription}
                     </Typography>
                  </CardContent>
               </StyledCard>
            </Grid>
         ))}
      </Grid>
   );
}

export default CardComponent;
