import React, {useState} from "react";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import axios from "axios";
import ResponsiveDialog from "./Dialog";
import { useSelector } from "react-redux";
export default function ItemList({ name, id, description, solution, unFollow , removeChallange}) {
  
  const token = useSelector((state) => state.counter.token);
  const [dialog, setDialog] = useState("");
  return (
    <>
    {dialog === "" ? null:  <ResponsiveDialog msg={dialog}/> }
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
        
        {unFollow ?  <Button
         
          variant="outlined"
          onClick={async () => {
            try {
              const res = await axios.post(
                `http://127.0.0.1:5000/user_challenges/delete`,
                {
                  token,
                  challange_id: id,
                }
              );
  
              console.log(res);
              removeChallange(id)
              setDialog("Code Challange Unfollow")
              setTimeout(() => {
                setDialog("")
              }, 2000);
            } catch (error) {
              
            }
           
          }}
        >
          Unfollow
        </Button> : <Button
       
       onClick={async () => {
         try {
          const res = await axios.post(
            "http://127.0.0.1:5000/user_challenges",
            {
              token,
              challange_id: id,
            }
          );
 
          setDialog("Following Code Challange")
          setTimeout(() => {
            setDialog("")
          }, 2000);
         } catch (error) {

          setDialog("Error Code Challange already follow")
          setTimeout(() => {
            setDialog("")
          }, 2000);
           
         }
       
       }}
     >
      Follow
     </Button>}
        
      </TableCell>
    </TableRow>
    </>
  );
}
