import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import coverimg from '../../../images/e89020d58ea679fe54d3e4efa02d91ba.jpg';
import cover from '../../../images/banner (1).jpg';
import { Button, Typography } from '@mui/material';
import { Link } from "react-router-dom";

const ban = {
    background: `url(${coverimg})`,
    marginTop: 150,
}

const Explore = () => {
    return (
        <Box style={ban} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
          style={{width:400, marginTop: '-110px'}}
           src={coverimg} alt="" />
        </Grid>
        <Grid item xs={12} md={6} sx={{display:'flex',justifyContent:'flex-start'}}>
           <Box>
           <Typography variant="h6">
              
              </Typography>
              <Typography variant="h4">
              FIND YOUR BIKE AND CAR
              </Typography>
              <Typography variant="h6" style={{fontSize:30,fontWeight:400}}>
              Explore here for more Products
              </Typography>
              <Link to="/explore"><Button variant="contained">Explore here</Button></Link>
              {/* <Button variant="contained">Explore here</Button>  */}
           </Box>   
        </Grid>
        </Grid>
        
    </Box>
    );
};

export default Explore;