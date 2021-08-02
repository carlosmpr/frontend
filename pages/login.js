import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from "next/router";
import axios from 'axios'
import { setToken } from "../features/counter/counterSlice";
export default function Login() {

  const [user, setUser] = useState({email:'', password:''})
  const token = useSelector((state) => state.counter.token)
  const router = useRouter();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/login", user);
     dispatch( setToken(res.data.token))
      router.push("/welcome");
    } catch (error) {

    }
  };

  console.log(token)
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
        name="email"
        value= {user.email}
        onChange= {handleChange}
        variant="outlined"
        style={{ width: "35%", marginBottom: "20px" }}
      />
      <TextField
      type="password"
        id="outlined-basic"
        label="Password"
        variant="outlined"
        name="password"
        value= {user.password}
        onChange= {handleChange}
        style={{ width: "35%", marginBottom: "20px" }}
      />

      <div style={{ display: "flex" }}>
        <Button variant="contained" style={{ marginRight: "5px" }} onClick={handleSubmit}>
          Login
        </Button>
        <Button variant="contained" style={{ background: "red" }}>
          <a href="/signup">Sign up?</a>
        </Button>
      </div>
    </div>
  );
}
