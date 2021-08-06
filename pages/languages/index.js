import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import LanguagesIcons from "../../component/LanguagesIcons";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import Loading from "../../component/Loading";
export default function index() {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.counter.token);
  const router = useRouter();
  useEffect(() => {
    if(token === ''){
      router.push('/')
    }else{
    fetch("http://127.0.0.1:5000/programing_languages")
      .then((res) => res.json())
      .then((result) => setData(result));
    }
  }, []);

  if (!data.length > 0) {
    return <Loading />;
  }
  return (
    <>
      <Navbar />
      <h1 style={{textAlign:'center'}}>Select a Language</h1>
      <div
        style={{
          width: "100vw",
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems:'center',
          padding:'25px',
          flexDirection:'column',
          marginLeft:'5%'
        }}
      >
        
        <Grid container spacing={5}>
          {data.map((item) => (
            <LanguagesIcons key={item.name} {...item} />
          ))}
        </Grid>
      </div>
    </>
  );
}
