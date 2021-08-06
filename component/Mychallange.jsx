import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ItemList from './ItemList'
import { useSelector } from "react-redux";
import Loading from './Loading';
export default function Mychallange() {
        const [data, setData] = useState([])
        const [loading, setLoading] = useState(true)
        const token = useSelector((state) => state.counter.token);
    
   
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.post('http://127.0.0.1:5000/user_challenges/yourchallanges', {token:token})
                setData(res.data)
               setLoading(false)
            } catch (error) {
                setLoading(false)
            }
           
        })()
     }, [])


     const removeChallange = (id) => {
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
                No code Challange Found.
             </div>
         )
     }
    return (
        <div>
           {data.map(item => <ItemList removeChallange={removeChallange}{...item} unFollow={true}/>)}
        </div>
    )
}
