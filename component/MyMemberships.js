import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GroupItem from './GroupItem'
import Grid from '@material-ui/core/Grid';
import { useSelector } from "react-redux";
import Loading from './Loading';
export default function MyMembership() {
        const [data, setData] = useState([])
        const token = useSelector((state) => state.counter.token);
        const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.post('http://127.0.0.1:5000/group_members/yourmemberships', {token: token})
                // setLoading(true)
                // setUser(res.data)
                setData(res.data)
                console.log(res.data)
                setLoading(false)
                
            } catch (error) {
                setLoading(false)
            }
           
        })()
     }, [])


     const removeGroup = (id) => {
        const newdata = data.filter(item => item.id !== id)
         setData(newdata)
     }


     if(loading){
        return(
            <Loading />
        )
    }

     if(!data.length > 0){
         return(
             <div>
                You need to join a Group
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
