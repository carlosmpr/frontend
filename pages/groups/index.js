import * as React from 'react';
import List from '@material-ui/core/List';
import GroupItem from '../../component/GroupItem';
import Navbar from '../../component/Navbar'
export default function Groups({data}) {
  return (
    <>
    <Navbar />
    <div style={{width:'100%' , display:'flex', justifyContent:'center', alignContent:'center'}}>
    <List sx={{ width: '80%', bgcolor: 'background.paper' }}>
      {data.map(item => <GroupItem {...item}/>)}
    </List>
    </div>
    </>
  );
}



export async function getServerSideProps() {
    
  
    const res = await fetch(
      `http://127.0.0.1:5000/groups`
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
  