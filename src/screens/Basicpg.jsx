import axios from "axios";
import { useEffect, useState } from "react";

const Basicpg=()=>{
    const [Data,setData]=useState([]);

    useEffect( async()=>{
         const res =await axios.get("http://localhost:8080/api/pgs/samePgList");
         console.log(res);
         setData([...Data,res.data]);
    },[])


    return(
        <>
            <h2>Available Hotels</h2>
            {
                Data.map((e,index)=>{
                    <li key={index}>e</li>
                })
            }
        </>

    )
}
export default Basicpg;