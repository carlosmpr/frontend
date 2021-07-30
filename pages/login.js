import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Login() {
  return (
    <div
      style={{
        width: "100vw",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <div style={{ display: "flex" }}>
        <Button variant="contained" style={{ marginRight: "5px" }}>
          Login
        </Button>
        <Button variant="contained" style={{ background: "red" }}>
          <a href="/signup">Sign up?</a>
        </Button>
      </div>
    </div>
  );
}
