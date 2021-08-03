import React from "react";
import TableData from "../../component/Table";
import GroupTable from "../../component/GroupTable";
import Navbar from '../../component/Navbar'

export default function LanguageDetails({ data }) {
  console.log(data);
  return (
    <>
    <Navbar />
    <div>
      {data.name}

      <div style={{ padding: "25px" }}>
        {data.code_challenges.length > 0 ? (
          <>
          <h1>Challanges</h1>
          <TableData code={data.code_challenges} />
          </>
        ) : (
          <p>no</p>
        )}
      </div>
      <div style={{ padding: "25px" }}>
      {data.groups.length > 0 ? 
      <> 
      
        <h1>Groups</h1>
        <GroupTable groups={data.groups} />
      </> : <p>no</p>}
      </div>
    </div>
    </>
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
