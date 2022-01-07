import React from 'react';
import {
   makeStyles,
   Typography,
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
   pageTitle: {
      padding: '3rem 0'
   },
}));

let theme = createTheme();
theme = responsiveFontSizes(theme);

function PageTitle(props) {
   const classes = useStyles();
   return (
      <ThemeProvider theme={theme}>
         <Typography variant="h1" component="h1" align="center" className={classes.pageTitle}>
            {props.title}
         </Typography>
      </ThemeProvider>
   );
}

export default PageTitle;
