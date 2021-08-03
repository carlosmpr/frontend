import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import LanguagesIcons from "../../component/LanguagesIcons";
export default function index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/programing_languages")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  if (!data.length > 0) {
    return <div>Loading..</div>;
  }
  return (
    <>
    <Navbar />
    <div style={{width:'100vw', height:'50vh',display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
      {data.map((item) => (
        <LanguagesIcons key={item.name} {...item} />
      ))}

      {/* <IconButton>Ruby</IconButton> */}
    </div>
    </>
  );
}
