import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GroupItem from './GroupItem'
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux";
export default function MyMembership() {
        const [data, setData] = useState([])
        const token = useSelector((state) => state.counter.token);
   
    useEffect(() => {
        (async () => {
            const res = await axios.post('http://127.0.0.1:5000/group_members/yourmemberships', {token: token})
            // setLoading(true)
            // setUser(res.data)
            setData(res.data)
            console.log(res.data)
        })()
     }, [])


     const removeGroup = (id) => {
        const newdata = data.filter(item => item.id !== id)
         setData(newdata)
     }
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
           {data.map(item => <GroupItem {...item} remove={true} removeGroup={removeGroup}/>)}
        </div>
        </Grid>
    )
}
