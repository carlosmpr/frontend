import React from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
export default function ItemList({ name, id, description, solution }) {
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
        <Button variant="outlined">Add Challanges</Button>
      </TableCell>
    </TableRow>
  );
}
