import React, { useState } from 'react'
import {Box,Text} from '@chakra-ui/react' ; 
import { useEffect } from 'react';
import { getData } from '../../Api/api';

function ImageSlider({image}) {
    // const [image,setImage] = useState([])  ; 
    // console.log(image)
    
    

  
    // <div>
        
    //     <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        
    //     <div  className=" carousel-inner">
    //         <div  className="carousel-item active" data-bs-interval="10000">
    //         <img  className=" w-100" alt="..."/>
            
    //         <div  className="  carousel-caption ">
    //             <Box bgColor='white'>
    //                 <Text></Text>
    //             </Box>
    //         </div>
    //         </div>
    //         <div className="carousel-item" data-bs-interval="2000">
    //         <img  className=" w-100" alt="..."/>
    //         <div className="carousel-caption d-none d-md-block">
    //             <h5>Second slide label</h5>
    //             <p>Some representative placeholder content for the second slide.</p>
    //         </div>
    //         </div>
    //         <div className="carousel-item">
    //         <img  className="w-100" alt="..."/>
    //         <div className="carousel-caption d-none d-md-block">
    //             <h5>Third slide label</h5>
    //             <p>Some representative placeholder content for the third slide.</p>
    //         </div>
    //         </div>
    //         <div className="carousel-indicators">
    //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="text-danger active" aria-current="true" aria-label="Slide 1"></button>
    //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //         </div>
    //     </div>
    // </div>
        
    // </div>
  
}

export default ImageSlider