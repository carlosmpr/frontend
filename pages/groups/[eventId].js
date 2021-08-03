import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function GroupMembers({eventId}) {
        const [data, setData] = useState([])
    
    const token  ="eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwiLCJuYW1lIjoiQ2FybG9zIiwiZ2l0aHViIjoiY2FybG9zZ2l0aHViIiwiaW1hZ2UiOiJjYXJsb3NpbWFnZSIsInBob25lIjoiMDAwMDAwMDAwIn0.7xJzb18bZCx38-7SmCf4Czj8fNUJ_Whh-CPZKLdnolU"
    
     
    
    useEffect(() => {
        (async () => {
            const res = await axios.post('http://127.0.0.1:5000/Allmembers', {
                token: token,
                group_id: eventId
            })
            // setLoading(true)
            // setUser(res.data)
            setData(res.data)
            console.log(res.data)
        })()
     }, [])

     if(!data.length > 0){
         return(
             <div>
                 Loading...
             </div>
         )
     }
    return (
        <div>
           {data.map(item => <p>{item.name}</p>)}
        </div>
    )
}


export async function getServerSideProps(context) {
    const { params } = context;
    const { eventId } = params;
  
    
  
    return {
      props: {
        eventId,
      }, // will be passed to the page component as props
    };
  }