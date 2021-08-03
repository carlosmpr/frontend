import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import axios from "axios";
import Noti from "../component/ErrorNoti";

import { setToken } from "../features/counter/counterSlice";
import MuiAlert from "@material-ui/lab/Alert";
import SuccNoti from "../component/SuccessNoti";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const token = useSelector((state) => state.counter.token);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setError("")
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", user);
        setSuccess("Login succesfull")
    
        setTimeout(() => {
          dispatch(setToken(res.data.token));
          router.push("/welcome");
        }, 1000);
      
     
    } catch (err) {
      setError("Invalid Credentials")
    }
  };

  console.log(token);
  return (
    <>
    <div
      style={{
        width: "100vw",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >

      {error == "" ? null: <Noti msg={error}/>}
      <h1>Login</h1>
      <TextField
        id="outlined-basic"
        label="Email"
        name="email"
        value={user.email}
        onChange={handleChange}
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />
      <TextField
        type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        name="password"
        value={user.password}
        onChange={handleChange}
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          style={{ marginRight: "5px", background: "black" }}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Button
          variant="contained"
          style={{ background: "red", background: "white", color: "black" }}
        >
          <a href="/signup">Sign up?</a>
        </Button>
      </div>
      {success == "" ? null: <SuccNoti msg={success}/>}
      
    </div>
   
     </>
  );
}
