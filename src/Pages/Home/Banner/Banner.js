import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from '../../../images/delivery-hero.jpg';
import { Button, Typography } from '@mui/material';



const Banner = () => {
    return (
        <Box style={{marginTop: 20}} sx={{ flexGrow: 1 }}>
             <Typography sx={{ fontWeight: 600, m: 2, color: 'secondary.main' }} variant="h3">
               HERO RIDER
            </Typography>

            <img style={{height:'5%',width:'100%'}} src={banner} alt="" />
           
            <Typography variant="h6" style={{marginTop: 20, color:'text.primary'}}>
             Hero Rider is your one-stop store for Hero Scooters, Parts and Support! We are here to help. Got questions about a scooter or need help with something after sales? We made it simple to reach us by text at (407) 513-2797. You can also send us a message through our Contact page.All Hero scooters are now equipped with full hydraulic NUTT brakes!
            </Typography>
            <Button sx={{m: 2}} variant="contained">Learn more</Button>
            
      {/* <Grid container spacing={2}>
      
        <Grid item xs={12} md={6}>
       
        </Grid>
        <Grid item xs={12} md={7}>
        
        </Grid>
        
      </Grid> */}
    </Box>
    );
};

export default Banner;