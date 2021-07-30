import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useRouter } from "next/router";
export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    github: "",
    phone: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/users", user);
      router.push("/welcome");
    } catch (error) {}
  };

  console.log(user);
  return (
    <div
      style={{
        width: "100vw",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Signup</h1>

      <TextField
        id="outlined-basic"
        label="Name"
        name="name"
        value={user.name}
        onChange={handleUser}
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="email"
        value={user.email}
        onChange={handleUser}
        style={{ width: "35%", marginBottom: "20px" }}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        name="password"
        type="password"
        value={user.password}
        onChange={handleUser}
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <TextField
        id="outlined-basic"
        label="Github"
        name="github"
        value={user.github}
        onChange={handleUser}
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <TextField
        id="outlined-basic"
        label="Image"
        name="image"
        value={user.image}
        onChange={handleUser}
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <TextField
        id="outlined-basic"
        label="Phone"
        name="phone"
        value={user.phone}
        onChange={handleUser}
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          style={{ marginRight: "5px" }}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
        <Button variant="contained" style={{ background: "red" }}>
          <a href="/signup">Login?</a>
        </Button>
      </div>
    </div>
  );
}
