import React, { useState } from 'react';
import lip7 from '../../../images/flat,1000x1000,075,f.u1.jpg';
import lip8 from '../../../images/Mahinra-xuv-.jpg';
import lip9 from '../../../images/news-1629092873026-c0b8d.jpg';
import lip10 from '../../../images/UtqLhb.jpg';
import lip11 from '../../../images/2016-Suzuki-.jpg';
import lip12 from '../../../images/e89020d58ea679fe54d3e4efa02d91ba.jpg';
import lip13 from '../../../images/flat,1000x1000,075,f.u1.jpg';
import lip14 from '../../../images/Mahinra-xuv-.jpg';
import lip15 from '../../../images/news-1629092873026-c0b8d.jpg';
import lip16 from '../../../images/UtqLhb.jpg';
import { Container, Grid, Alert } from '@mui/material';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        Price: '40.66 $',
        space:25,
        img: lip7
    },
    {
        id: 2,
        name: 'Latest Mahindra XUV 700 price',
        description: 'View car and bike images and photo gallery of all new cars & two wheelers. ZigWheels brings you latest collection of high resolution photos of all car and bike models in different colors and angles. Take a look at the front & rear view, side & top view & up to date photo gallery of two wheelers. Also check latest pictures of car models with interior, exterior and 360-degree views.',
        Price: '75.89 $',
        space:8,
        img: lip8
    },
    {
        id: 3,
        name: 'Latest Mahindra XUV 700 price',
        description: 'View car and bike images and photo gallery of all new cars & two wheelers. ZigWheels brings you latest collection of high resolution photos of all car and bike models in different colors and angles. Take a look at the front & rear view, side & top view & up to date photo gallery of two wheelers. Also check latest pictures of car models with interior, exterior and 360-degree views.',
        Price: '98.66 $',
        space:16,
        img: lip9
    },
    {
        id: 4,
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        Price: '34.67 $',
        space:6,
        img: lip10
    },
    {
        id: 5,
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description:'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        Price: '55.99 $',
        space:21,
        img: lip11
    },
    {
        id: 6,
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        Price: '60.44 $',
        space:25,
        img: lip12
    },
    {
        id: 7,
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        Price: '72.69 $',
        space:9,
        img: lip13
    },
    {
        id: 8,
        name: 'Latest Mahindra XUV 700 price',
        description: 'View car and bike images and photo gallery of all new cars & two wheelers. ZigWheels brings you latest collection of high resolution photos of all car and bike models in different colors and angles. Take a look at the front & rear view, side & top view & up to date photo gallery of two wheelers. Also check latest pictures of car models with interior, exterior and 360-degree views.',
        Price: '90.66 $',
        space:14,
        img: lip14
    },
    {
        id: 9,
        name: 'Latest Mahindra XUV 700 price',
        description: 'View car and bike images and photo gallery of all new cars & two wheelers. ZigWheels brings you latest collection of high resolution photos of all car and bike models in different colors and angles. Take a look at the front & rear view, side & top view & up to date photo gallery of two wheelers. Also check latest pictures of car models with interior, exterior and 360-degree views.',
        Price: '50.78 $',
        space:20,
        img: lip15
    },
    {
        id: 10,
        name: 'Suzuki GSX-R1000 Red & Black Commemorative Edition',
        description: 'Suzuki already has a classic blue and white commemorative livery for its GSX-R line of motorcycles, but today at the Indianapolis GP, the Japanese brand debuted another commemorative edition of the Suzuki GSX-R1000, this time in red & black.',
        Price: '80.92 $',
        space:10,
        img: lip16
    }
]

const AvailableProducts = () => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <h2>Available products</h2>
            {bookingSuccess && <Alert severity="success">Products booked Successfully!</Alert>}
            <Grid container spacing={2}>      
                {
                    bookings.map(booking => <Booking
                       key={booking.id}
                       booking={booking}
                       setBookingSuccess={setBookingSuccess}
                    >

                    </Booking>)
                }
            </Grid>
            </Container>
    );
};

export default AvailableProducts;