import * as React from 'react';
import List from '@material-ui/core/List';


import GroupItem from '../../component/GroupItem';

export default function Groups({data}) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {data.map(item => <GroupItem {...item}/>)}
    </List>
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
  