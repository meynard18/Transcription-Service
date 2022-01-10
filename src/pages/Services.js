import bg1 from '../components/images/bg1.png';
import PageTitle from '../components/PageTitle';
import CardComponent from '../components/CardComponent';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
   serviceBg: {
      minHeight: '100vh',
   },

   header: {
      color: '#440a67',
   },
}));

function Services() {
   const classes = useStyles();

   return (
      <div id="services" className={classes.serviceBg}>
         <Typography className={classes.header}>
            <PageTitle title="Our Service" />
         </Typography>
         <CardComponent />
      </div>
   );
}

export default Services;
