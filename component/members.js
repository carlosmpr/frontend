import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';
import Navbar from '../component/Navbar';
import MemberItem from '../component/MembersItem';
import { useSelector } from "react-redux";
export default function Members({id}) {
        const [data, setData] = useState([])
        const token = useSelector((state) => state.counter.token);
    
    useEffect(() => {
        (async () => {
            const res = await axios.post('http://127.0.0.1:5000/Allmembers', {
                token: token,
                group_id:id
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
                 You need to be part of the Group
             </div>
         )
     }
    return (
        <>
        
        <Grid item xs={12} sm={8} md={12}  elevation={6} square>
        <div>
           {data.map(item => <MemberItem {...item}/>)}
        </div>
        </Grid>
        </>
    )
}
