import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import ResponsiveDialog from "./Dialog";
import MembersDialog from "./MembersDialog";
import axios from "axios";
export default function GroupItem({
  id,
  name,
  programing_language,
  remove,
  removeGroup,
}) {
  const [dialog, setDialog] = useState("");
  const [open, setOpen] = useState(false);
  const token = useSelector((state) => state.counter.token);

  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <>
      {dialog === "" ? null : <ResponsiveDialog msg={dialog} />}
      {open ? <MembersDialog id={id} closeDialog={closeDialog} /> : null}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Programing Language: {programing_language.name}
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}

              <Button
                style={{ background: "red", color: "white" }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                Members
              </Button>
              {remove ? (
                <Button
                  style={{
                    background: "black",
                    color: "white",
                    marginLeft: "10px",
                  }}
                  onClick={async () => {
                    try {
                      const res = await axios.post(
                        "http://127.0.0.1:5000/group_members/delete",
                        {
                          token,
                          group_id: id,
                        }
                      );

                      removeGroup(id);
                      setDialog("Your not part of the group anymore");
                      setTimeout(() => {
                        setDialog("");
                      }, 2000);

                      console.log(res);
                    } catch (error) {}
                  }}
                >
                  Remove
                </Button>
              ) : (
                <Button
                  style={{
                    border: "black 1px solid",
                    color: "black",
                    margin: "0 10px",
                  }}
                  onClick={async () => {
                    try {
                      const res = await axios.post(
                        "http://127.0.0.1:5000/group_members",
                        {
                          token,
                          group_id: id,
                        }
                      );
                      setDialog("Group Join!");
                      setTimeout(() => {
                        setDialog("");
                      }, 2000);

                      console.log(res);
                    } catch (error) {
                      console.log(error);
                      setDialog("Already a Member");
                      setTimeout(() => {
                        setDialog("");
                      }, 2000);
                    }
                  }}
                >
                  Join
                </Button>
              )}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
