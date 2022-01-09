import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import swal from 'sweetalert';

function Account() {
   const [accounts, setAccounts] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      axios.get(`api/account`).then((res) => {
         console.log(res);

         if (res['status'] === 200) {
            setAccounts(res.data.accounts);
            setLoading(false);
         }
      });
   }, []);
   const deleteAccount = (e, id) => {
      e.preventDefault();
      const btnDelete = e.currentTarget;
      btnDelete.innertext = 'Deleting';

      axios.delete(`api/deleteAccount/${id}`).then((res) => {
         if (res.data.status === 200) {
            swal('Deleted!', res.data.message, 'success');
            btnDelete.closest('tr').remove();
         } else if (res.data.status === 404) {
            swal('Error', res.data.message, 'error');
            btnDelete.innerText = 'Delete';
         }
      });
   };

   if (loading) {
      return <h4>Loading Account Data</h4>;
   } else {
      var account_HTMLTABLE = '';
      account_HTMLTABLE = accounts.map((item, index) => {
         return (
            <TableRow key={index}>
               <TableCell align="center">{item.id}</TableCell>
               <TableCell align="center">{item.firstName}</TableCell>
               <TableCell align="center">{item.lastName}</TableCell>
               <TableCell align="center">{item.email}</TableCell>
               <TableCell align="center">
                  <Link to={'/transcription'}>
                     <Button variant="contained">Edit</Button>
                  </Link>
               </TableCell>
               <TableCell align="center">
                  <Button
                     onClick={(e) => deleteAccount(e, item.id)}
                     variant="contained"
                     color="error"
                  >
                     Delete
                  </Button>
               </TableCell>
            </TableRow>
         );
      });
   }

   return (
      <>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell align="center">Id</TableCell>
                     <TableCell align="center">First Name</TableCell>
                     <TableCell align="center">Last Name</TableCell>
                     <TableCell align="center">Email</TableCell>
                     <TableCell align="center">Edit</TableCell>
                     <TableCell align="center">Delete</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>{account_HTMLTABLE}</TableBody>
            </Table>
         </TableContainer>
         <Link to={'/transcription'}>Transcription</Link>
      </>
   );
}

export default Account;
