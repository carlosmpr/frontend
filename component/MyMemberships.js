import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GroupItem from './GroupItem'
import Grid from '@material-ui/core/Grid';
export default function MyMembership() {
        const [data, setData] = useState([])
    
    const token = {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJjYXJsb3NAZW1haWwiLCJuYW1lIjoiQ2FybG9zIiwiZ2l0aHViIjoiY2FybG9zZ2l0aHViIiwiaW1hZ2UiOiJjYXJsb3NpbWFnZSIsInBob25lIjoiMDAwMDAwMDAwIn0.7xJzb18bZCx38-7SmCf4Czj8fNUJ_Whh-CPZKLdnolU"
    
        // "group_id":1
    }
    useEffect(() => {
        (async () => {
            const res = await axios.post('http://127.0.0.1:5000/group_members/yourmemberships', token)
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
        <Grid item xs={12} sm={8} md={7}  elevation={6} square>
        <div>
           {data.map(item => <GroupItem {...item} remove={true}/>)}
        </div>
        </Grid>
    )
}
