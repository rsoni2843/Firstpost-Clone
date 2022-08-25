import { Image, Img } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function ImageSlider({image}) {
    const pushedImages = [] ; 
    const [selectedImages,setSelectedImages] = useState(0) ; 
    const [allImages,setAllImages] = useState(pushedImages) ; 
    const [count,setCount] = useState(0) ; 
    for (let a=0 ; a<image.length ; a++){
        if(image[a].image_url===null){continue}
        else{pushedImages.push(image[a].image_url)} ; 
    }
    console.log(pushedImages)
    useEffect(()=>{
        const id = setInterval(()=>{
           setSelectedImages(selectedImages=>selectedImages > 3 ?  0 : selectedImages + 1)
             
        },3500) ; 
        const cleanup = ()=>{
            clearInterval(id) ; 
        }
        return cleanup ; 
    },[])
    
  return (
    <div margin='auto'>
        <img height='200px' width='98%' src={allImages[selectedImages]}/>
    </div>
  )
}

export default ImageSlider