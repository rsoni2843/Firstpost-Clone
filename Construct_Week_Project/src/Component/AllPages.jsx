import { getData } from '../Api/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import ImageSlider from './Slider/ImageSlider';
import NewSlider from './Slider/NewSlider';


function AllPages({endPoint}){
    // getData()  ; 
    const [data,setData] = useState([]) ; 
    const [image,setImage] = useState([]) ; 
    const [i1,setI1] = useState({})
    const [i2,setI2] = useState({})
    const [i3,setI3] = useState({})
    useEffect(()=>{
        handleGetData() ; 
    },[]) ; 
    function handleGetData(){
        return getData({endPoint})
        .then(res=>{
            // console.log(res) ;
            setI1(res.data.articles[0])
            setI2(res.data.articles[1])
            setI3(res.data.articles[2])
            setImage(res.data.articles)
            setData(res.data) ; 
        })
        .catch(err=>{console.log(err)})
    }
    // let image1 = image[0].urlToImage ; 
    // let image2 = image[1].urlToImage ; 
    // let image3 = image[2].urlToImage ; 
    console.log(i1)
    // console.log(image)
    // console.log(image[0].author) ; 
    return (

        
        <div>
            {/* <Box>{image?.map((a)=>{
                <p key={a.title}>{a.author}</p>
            })}</Box> */}
            <Flex minH='500px' w='75%' m='auto' border='1px solid black'>
                <Box border='1px solid black' w='65%'>
                    <Text fontSize={30} fontWeight={'bold'}>The Big News</Text>
                    <Box justifyContent='space-between' display='flex' w='95%' m='auto'  >
                        <Box  w='38%'><hr color='black'/></Box>
                        <Box w='20%'><Progress  colorScheme='yellow' size={'xs'} value={100}/></Box>
                        <Box w='38%'><hr color='black'/></Box>
                    </Box>
                    {/* <NewSlider/> */}
                    <ImageSlider img1={i1} img3={i2} img2={i3} data={image}/>
                </Box>
                <Box border='1px solid black' w='35%'>
                    {image?.map((item)=>{
                        return <Text key={item.title}>{item.author}</Text>
                    })}
                </Box>

            </Flex>
        </div>
    )
}
export default AllPages ; 
