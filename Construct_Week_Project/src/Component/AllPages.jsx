import { getData } from '../Api/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import ImageSlider from './Slider/ImageSlider';


function AllPages({endPoint}){
    // getData()  ; 
    const [data,setData] = useState([]) ; 
    const [image,setImage] = useState([]) ; 
    useEffect(()=>{
        handleGetData() ; 
    },[]) ; 
    function handleGetData(){
        return getData({endPoint})
        .then(res=>{
            // console.log(res) ;
            setImage(res.data.articles)
            setData(res.data) ; 
        })
        .catch(err=>{console.log(err)})
    }
    console.log(image)
    // console.log(image[0].author) ; 
    return (

        
        <div>
            <Box>{image?.map((a)=>{
                <p key={a.title}>{a.author}</p>
            })}</Box>
            <Flex minH='500px' w='75%' m='auto' border='1px solid black'>
                <Box border='1px solid black' w='65%'>
                    <Text fontSize={30} fontWeight={'bold'}>The Big News</Text>
                    <Box justifyContent='space-between' display='flex' w='95%' m='auto'  >
                        <Box  w='38%'><hr color='black'/></Box>
                        <Box w='20%'><Progress  colorScheme='yellow' size={'xs'} value={100}/></Box>
                        <Box w='38%'><hr color='black'/></Box>
                    </Box>
                    <div>
        
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        
        <div  className=" carousel-inner">
            <div  className="carousel-item active" data-bs-interval="10000">
            <img  className=" w-100" alt="..."/>
            
            <div  className="  carousel-caption ">
                <Box bgColor='white'>
                    <Text></Text>
                </Box>
            </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
            <img  className=" w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img  className="w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="text-danger active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        </div>
    </div>
        
    </div>
                </Box>
                <Box border='1px solid black' w='35%'>

                </Box>

            </Flex>
        </div>
    )
}
export default AllPages ; 
