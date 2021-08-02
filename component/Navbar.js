import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useSelector } from "react-redux";

export default function Navbar() {
  const token = useSelector((state) => state.counter.token);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ marginBottom: "50px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The CodeChallange
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {token === "klk" ? null : (
        <AppBar position="static" style={{ marginTop: "-50px" }}>
          <Toolbar style={{ background: "black", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Token: {token}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
}
