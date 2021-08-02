import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { useSelector } from "react-redux";


export default function GroupTable({groups}) {
  const token = useSelector((state) => state.counter.token);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Group Name</TableCell>
            <TableCell align="right">Join Group</TableCell>
            <TableCell align="right">Members</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>

              <TableCell align="right">1,500</TableCell>
              <TableCell align="right"><Button  style={{background:'red', color:'white'}}
              
              
              onClick={async () => {
                const res = await axios.post(
                  "http://127.0.0.1:5000/group_members",
                  {
                    token,
                    group_id: row.id,
                  }
                );
    
                console.log(res);
              }}
              >Join</Button></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
