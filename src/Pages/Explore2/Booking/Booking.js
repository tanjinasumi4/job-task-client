import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,setBookingSuccess}) => {
    const {name,description,Price,space,img} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        
             <>
              <Grid item xs={4} sm={6} md={4}>
           <Card sx={{ minWidth: 275 }}>
           <CardMedia
             component="img"
             style={{ width: 'auto', height: '200px', margin: '0 auto'}}
             image={img}
             alt="green iguana"
             
      />
      <CardContent>
        <Typography  sx={{ color: 'info.main',fontWeight:600 }} variant="h5" component="div">
         {name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {Price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {space} Piece Available
        </Typography>
        <Button onClick={handleBookingOpen} variant="contained">Purchace Product</Button>

      </CardContent>
    </Card>
        </Grid> 
        <BookingModal
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        setBookingSuccess={setBookingSuccess}
        ></BookingModal>


             </>     
        
    );
};

export default Booking;