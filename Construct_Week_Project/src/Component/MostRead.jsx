import { Box,Text } from "@chakra-ui/react";
import { useState } from "react"
import { useEffect } from "react"
import { getData2 } from "../Api/api"



function MostRead(){
    const [data,setData] = useState([]) ; 
    const [count,setCount] = useState(1) ;
    useEffect(()=>{
        getData2()
        .then(res=>{
            setData(res.data.articles) ; 
            // console.log(res) ; 
        })
    },[]) ; 
   
    console.log(data)
    return (
        <div /*style={{position:'sticky',top:'0px'}}*/>
            <Box border={'1px solid black'}>
                <Text textAlign={'left'}  fontSize='2xl'  ml='15px'fontWeight={'bold'} fontFamily={'arial'} textDecoration='underline' textDecorationColor='yellow.300' textDecorationThickness={3} fontStyle={'italic'}>Most Read</Text>
            </Box>
            <Box  border={'1px solid black'}>
                {data?.map((item)=>{
                    return <Box display={'flex'} borderWidth={'1px'}>
                        <Box w='10%'>
                            <Text>a</Text>
                        </Box>
                        <Box w='90%'>
                            <Text fontFamily={'Playfair Display'} fontSize={'medium'} fontWeight={'bold'}>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </Box>
                        
                    </Box>
                })}
            </Box>
        </div>
    )
}
export default MostRead ; 