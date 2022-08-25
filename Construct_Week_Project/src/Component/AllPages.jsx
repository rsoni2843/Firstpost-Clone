import { getData } from '../Api/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import ImageSlider from './Slider/ImageSlider';


function AllPages({endPoint}){
    const [data,setData] = useState([]) ; 
    const [image,setImage] = useState([]) ; 
    useEffect(()=>{
        getData({endPoint})
        .then(res=>{
            // console.log(res) ;
            setImage(res.data.results)
            setData(res.data) ; 
        })
    },[endPoint]) ; 
    // console.log(data) ;
    // console.log(image) 

    return (

        
        <div>
            <Flex minH='500px' w='75%' m='auto' border='1px solid black'>
                <Box border='1px solid black' w='65%'>
                    <Text fontSize={30} fontWeight={'bold'}>The Big News</Text>
                    <Box justifyContent='space-between' display='flex' w='95%' m='auto'  >
                        <Box  w='38%'><hr color='black'/></Box>
                        <Box w='20%'><Progress  colorScheme='yellow' size={'xs'} value={100}/></Box>
                        <Box w='38%'><hr color='black'/></Box>
                    </Box>
                    <ImageSlider image = {image}/>
                </Box>
                <Box border='1px solid black' w='35%'>

                </Box>

            </Flex>
        </div>
    )
}
export default AllPages ; 
