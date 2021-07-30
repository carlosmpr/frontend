import React, { useEffect, useState } from "react";

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
    <div style={{width:'100vw', display:'flex', justifyContent:'space-evenly'}}>
      {data.map((item) => (
        <LanguagesIcons key={item.name} {...item} />
      ))}

      {/* <IconButton>Ruby</IconButton> */}
    </div>
  );
}
