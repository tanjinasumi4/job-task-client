import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import lip1 from '../../../images/e89020d58ea679fe54d3e4efa02d91ba.jpg';
import lip2 from '../../../images/2016-Suzuki-.jpg';
import lip3 from '../../../images/Mahinra-xuv-.jpg';
import lip4 from '../../../images/UtqLhb.jpg';
import lip5 from '../../../images/news-1629092873026-c0b8d.jpg';
import lip6 from '../../../images/flat,1000x1000,075,f.u1.jpg';

const services = [
    {
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        img: lip1

    },
    {
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        img: lip2

    },
    {
        name: 'Latest Mahindra XUV 700 price',
        description: 'View car and bike images and photo gallery of all new cars & two wheelers. ZigWheels brings you latest collection of high resolution photos of all car and bike models in different colors and angles. Take a look at the front & rear view, side & top view & up to date photo gallery of two wheelers. Also check latest pictures of car models with interior, exterior and 360-degree views.',
        img: lip3

    },
    {
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        img: lip4

    },
    {
        name: 'Latest Mahindra XUV 700 price',
        description: 'View car and bike images and photo gallery of all new cars & two wheelers. ZigWheels brings you latest collection of high resolution photos of all car and bike models in different colors and angles. Take a look at the front & rear view, side & top view & up to date photo gallery of two wheelers. Also check latest pictures of car models with interior, exterior and 360-degree views.',
        img: lip5

    },
    {
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        img: lip6

    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
        <Typography sx={{ fontWeight: 500, m: 5, color: 'secondary.main' }} variant="h4" component="div">
              OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600,m: 2 }} variant="h6" component="div">
              Look At A Glance Our Services
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
            services.map(service =><Service
                 key={service.name}
                 service={service}
            ></Service>)
        }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;