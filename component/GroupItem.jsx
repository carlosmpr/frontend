import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
export default function GroupItem({name, programing_language}) {
    return (
        <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                 Programing Language: {programing_language.name} 
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
                <Button  style={{background:'red', color:'white', marginLeft:'35%'}}>Join</Button>
                <Button  style={{background:'red', color:'white', marginLeft:'35%'}}>Members</Button>

              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        </>
    )
}
