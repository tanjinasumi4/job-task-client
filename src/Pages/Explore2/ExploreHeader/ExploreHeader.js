import { Container, Grid, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import React from 'react';
import ban2 from '../../../images/flat,1000x1000,075,f.u1.jpg';

const ExploreHeader = () => {
    return (
        <div>
            <Container style={{marginTop:30}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                       <Typography variant="h5">
                       BEST OF NEW LAUNCH
                       </Typography>
                       <Typography variant="h3" style={{fontSize:50,fontWeight:400}}>
                       FIND YOUR BIKE AND CAR
                       </Typography>
                       <Typography variant="h5">
                       DEFINE YOUR STYLE STATEMENT
                       </Typography>
                       <Typography variant="h6">
                       Give your bike a stunning new look with exclusively designed Bike Knee Pad. The graphic decals are tough and last longer, a perfect companion for your bike. The waterproof decals are easy to apply and remove and don’t leave any marks after removal. With fade proof-technology, the sticker will last long once put on.
                       </Typography>
                       
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <img style={{height:'100%',width:'100%'}} src={ban2} alt="" />
                    
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ExploreHeader;