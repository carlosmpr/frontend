import React from "react";
import TableData from "../../component/Table";

export default function LanguageDetails({ data }) {
  console.log(data);
  return (
  <div>
      {data.name}
      
      <div style={{padding:'25px'}}>
      {data.code_challenges.length > 0 ? <TableData code={data.code_challenges}/> : <p>no</p>}
      </div>
      {data.groups.length > 0 ? <p>yes</p> : <p>no</p>}
      </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { eventId } = params;

  const res = await fetch(
    `http://127.0.0.1:5000/programing_languages/${eventId}`
  );
  const data = await res.json();

  console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
