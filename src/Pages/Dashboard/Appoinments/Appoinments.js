import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Appoinments = () => {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect( () => {
        const url = `https://afternoon-falls-71642.herokuapp.com/appointments?email=${user.email}`
         fetch(url)
           .then(res => res.json())
           .then(data => setAppointments(data));
    }, [])

    return (
        <div>
            <h2>My Orders: {appointments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Pay</TableCell>
            <TableCell align="right">Myorders</TableCell>
            <TableCell align="right">Products Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{appointments.length}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appoinments;