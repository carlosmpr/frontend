import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setToken } from "../features/counter/counterSlice";
import SuccNoti from "../component/SuccessNoti";
import Noti from "../component/ErrorNoti";
export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector((state) => state.counter.token);
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
    github: "",
    phone: "",
  });

  const handleUser = (e) => {
    setError("")
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/users", user);
      setSuccess("Login succesfull")
    
      setTimeout(() => {
        dispatch(setToken(res.data.token));
        router.push("/welcome");
    })} catch (error) {
      setError("Invalid Credentials")
    }
  };

  console.log(user);
  return (
    <div
      style={{
        width: "100vw",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
       {error == "" ? null: <Noti msg={error}/>}
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
          style={{ marginRight: "5px", background:'black' }}
          onClick={handleSubmit}
        >
          Sign up
        </Button>
        <Button variant="contained" style={{ background: "white", color:'black' }}>
          <a href="/login">Login?</a>
        </Button>
        {success == "" ? null: <SuccNoti msg={success}/>}
      </div>
    </div>
  );
}
