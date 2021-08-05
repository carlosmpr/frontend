import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import axios from "axios";
export default function MemberItem({ name, phone, email , github }) {
  const token = useSelector((state) => state.counter.token);
  return (
    <>
      <ListItem >
        <ListItemAvatar>
        <Avatar
        alt="Remy Sharp"
        src="https://thispersondoesnotexist.com/image"
        sx={{ width: 250, height: 250, marginLeft:'25px', marginRight:'25px' }}
      />
        </ListItemAvatar>
        
        <ListItemText
         sx={{  fontSize:'1.5rem !important' }}
          secondary={
            <React.Fragment>
            <span style={{fontSize:'1.4rem'}}>Name:</span>
              <Typography
                sx={{ display: "inline", fontSize:'1.2rem' }}
                component="p"
                variant="body2"
                color="text.primary"
              >
               {` ${name}`}
              </Typography>
              <span style={{fontSize:'1.4rem'}}>{` Email:`}</span>   
              <Typography
                sx={{ display: "inline", fontSize:'1.2rem' }}
                component="p"
                variant="body2"
                color="text.primary"
              >
               {` ${email}`}
              </Typography>
              <span style={{fontSize:'1.4rem'}}>  {`  Phone:`} </span>
              <Typography
                sx={{ display: "inline", fontSize:'1.2rem' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {`  ${phone}`}
              </Typography>
             
              <Typography
                sx={{ display: "inline", fontSize:'1.2rem' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              <span style={{fontSize:'1.4rem'}}> {` Github:`} </span>
              </Typography>
              {`  ${github}`}
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
