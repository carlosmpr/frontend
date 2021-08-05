import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useRouter } from "next/router";
import Avatar from "@material-ui/core/Avatar";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { setToken } from "../features/counter/counterSlice";

export default function Navbar() {
  const token = useSelector((state) => state.counter.token);
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ marginBottom: "50px" }}>
        <Toolbar
          style={{
            background: "black",
            display: "flex",
            justifyContent: "space-evenly",
            alignContent: "center",
          }}
        >
          <Typography variant="h6" component="div">
            <Link href="/welcome">The CodeChallange</Link>
          </Typography>

          <Link href="/account">
            <a>Account</a>
          </Link>

          <Link href="/groups">
            <a>Groups</a>
          </Link>

          <Link href="/languages">
            <a>Challenges</a>
          </Link>
          <Link href="/account">
            <Avatar
              alt="Remy Sharp"
              src="https://thispersondoesnotexist.com/image"
            />
          </Link>

          <Button
            variant="contained"
            style={{ color: "black", background: "white" }}
            onClick={() => {
              dispatch(setToken(""));
              router.push("/");
            }}
          >
            Sign out
          </Button>
        </Toolbar>
      </AppBar>

      {token === "" ? null : (
        <AppBar position="static" style={{ marginTop: "-50px" }}>
          <Toolbar style={{ background: "#1C2431", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Token: {token}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
    </Box>
  );
}
