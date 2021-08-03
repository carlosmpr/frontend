import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export default function SuccNoti({ msg }) {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
   

    setOpen(false);
  };

  return (
    <div style={{marginTop:'25px'}}>
     
        <Alert severity="success">{msg}</Alert>

    </div>
  );
}
