import   React, {useState} from 'react';
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
import ResponsiveDialog from "./Dialog";


export default function GroupTable({groups}) {
  const token = useSelector((state) => state.counter.token);
  const [dialog, setDialog] = useState("");

  return (
    <>
      {dialog === "" ? null:  <ResponsiveDialog msg={dialog}/> }
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{background:'#823E41', color:'white'}}>
            <TableCell style={{ color:'white'}}>Group Name</TableCell>
            <TableCell style={{ color:'white'}} align="right">Members</TableCell>
            <TableCell style={{ color:'white'}} align="right">Join</TableCell>
           
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
                
                try {
                  const res = await axios.post(
                    "http://127.0.0.1:5000/group_members",
                    {
                      token,
                      group_id: row.id,
                    }
                  );
                  setDialog("Group Join!")
                  setTimeout(() => {
                    setDialog("")
                  }, 2000);
                  console.log(res);
                } catch (error) {
                  setDialog("Already a Member")
                  setTimeout(() => {
                    setDialog("")
                  }, 2000);
                }
               
              }}
              >Join</Button></TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
