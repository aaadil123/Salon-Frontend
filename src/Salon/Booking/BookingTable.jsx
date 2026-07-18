import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSalonBookings } from '../../Redux/Booking/action';
import { Button } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BookingTable() {
  const dispatch = useDispatch()
  const {salon, booking} = useSelector(store => store)

  useEffect(()=>{
    if(salon.salon){
      dispatch(fetchSalonBookings({
        jwt:localStorage.getItem('jwt')
      }))
    }
  },[salon.salon])
  
  return (
    <>
        <h1 className='pb-5 text-xl font-bold'>
            Bookings
        </h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell align="center">Services</StyledTableCell>
                <StyledTableCell align="center">Time & Date</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Customer</StyledTableCell>
                <StyledTableCell align="center">Status</StyledTableCell>
                <StyledTableCell align="center">Cancel</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {booking.bookings.map((booking) => (
                <StyledTableRow key={booking.id}>
                    <StyledTableCell component="th" scope="row">
                      {booking.services.map(service => <li key={service.id}>
                        {service.name} - {service.duration} minutes
                      </li>) 
                      }
                    </StyledTableCell>
                    <StyledTableCell align="center">{booking.startTime}</StyledTableCell>
                    <StyledTableCell align="center">{booking.totalPrice}</StyledTableCell>
                    <StyledTableCell align="center">
                      <p>{booking.user.fullName}</p>
                      <p>{booking.user.email}</p>
                    </StyledTableCell>
                    <StyledTableCell align="center">{booking.status}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Button color='error'>Cancel</Button>
                    </StyledTableCell>
                </StyledTableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </>
  );
}
