import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ItemList from './ItemList'
import { useSelector } from "react-redux";
export default function Mychallange() {
        const [data, setData] = useState([])
        const token = useSelector((state) => state.counter.token);
    
   
    useEffect(() => {
        (async () => {
            const res = await axios.post('http://127.0.0.1:5000/user_challenges/yourchallanges', {token:token})
            // setLoading(true)
            // setUser(res.data)
            setData(res.data)
            console.log(res.data)
        })()
     }, [])


     const removeChallange = (id) => {
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
        <div>
           {data.map(item => <ItemList removeChallange={removeChallange}{...item} unFollow={true}/>)}
        </div>
    )
}
