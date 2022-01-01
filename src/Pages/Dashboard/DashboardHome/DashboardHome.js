import * as React from 'react';
import  Grid  from '@mui/material/Grid';
import dashpic from '../../../images/UtqLhb.jpg';
import Appoinments from '../Appoinments/Appoinments';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
           <Grid item xs={12} sm={4}>
           <img style={{width: '100%'}} src={dashpic} alt="" />
        </Grid>
        <Grid item xs={12} md={8}>
            <Appoinments></Appoinments>
        </Grid>
   </Grid>
    );
};

export default DashboardHome;