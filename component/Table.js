import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ItemList from './ItemList'



export default function TableData({code}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Challange Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Difficulty</TableCell>
            <TableCell align="right">Solution</TableCell>
            <TableCell align="right">Add</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {code.map((row) => ( <ItemList {...row}/>))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}