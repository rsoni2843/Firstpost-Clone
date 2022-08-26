import { Box } from "@chakra-ui/react";
import { useState } from "react"
import { useEffect } from "react"
import { getData2 } from "../Api/api"



function MostRead(){
    const [data,setData] = useState([]) ; 

    useEffect(()=>{
        getData2()
        .then(res=>{
            setData(res.data.articles) ; 
            // console.log(res) ; 
        })
    },[])
    console.log(data)
    return (
        <div>
            <Box>
                {data?.map((item)=>{
                    return 
                })}
            </Box>
        </div>
    )
}
export default MostRead ; 