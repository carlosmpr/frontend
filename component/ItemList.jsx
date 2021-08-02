import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useSelector } from "react-redux";
export default function ItemList({ name, id, description, solution }) {
  const token = useSelector((state) => state.counter.token);
  return (
    <TableRow
      key={name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{description}</TableCell>
      <TableCell align="right">Difficulty</TableCell>
      <TableCell align="right">solution</TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          onClick={async () => {
            const res = await axios.post(
              "http://127.0.0.1:5000/user_challenges",
              {
                token,
                challange_id: id,
              }
            );

            console.log(res);
          }}
        >
          Add Challanges
        </Button>
      </TableCell>
    </TableRow>
  );
}
