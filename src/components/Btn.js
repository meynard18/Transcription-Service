import React from 'react';
import {
   makeStyles,
   Grid,
   createTheme,
   responsiveFontSizes,
   Button,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
   btn: {
      backgroundColor: '#93329e',
      color: '#ffe3fe',
      border: '1px solid #ffe3fe',
      marginTop: '-2rem',
   
   },

}));

let theme = createTheme();
theme = responsiveFontSizes(theme);

function ReadBtn(props) {
   const classes = useStyles();
   return (
      <Grid align='center' >
         <Button className={classes.btn}>{props.title}</Button>
      </Grid>
   );
}

export default ReadBtn;
