import { getData } from '../Api/api';
import { useEffect, useState } from 'react';
import { Box, Flex, Progress, Text, Image,Input,Button, useDisclosure, Alert } from '@chakra-ui/react';
import ImageSlider from './Slider/ImageSlider';
import EmailSubscribe from './EmailSubscribe';
import MostRead from './MostRead';
import Paginations from './Pagenation';
import { useSearchParams } from 'react-router-dom';



function AllPages({endPoint,pageName}){
    // getData()  ; 
    const {
        isOpen: isVisible,
        onClose,
        onOpen,
      } = useDisclosure({ defaultIsOpen: true })
    const [page,setPage] = useState([]) ; 
    // const [current,setCurrent] = useState(1) ;
    const [searchParams,setSearchParams] = useSearchParams() ;
    const initPage = Number(searchParams.get("page")||1) ; 

    const [current,setCurrent] = useState(initPage)  ; 
    const [data,setData] = useState([]) ; 
    const [image,setImage] = useState([]) ; 
    const [i1,setI1] = useState({})
    const [i2,setI2] = useState({})
    const [i3,setI3] = useState({})
    useEffect(()=>{
        handleGetData() ; 
    },[current]) ; 
    function handleGetData(){
        return getData({endPoint,current})
        .then(res=>{
            // console.log(res) ;
            setPage(res.data.totalResults) ; 
            setI1(res.data.articles[0]) ; 
            setI2(res.data.articles[1]) ; 
            setI3(res.data.articles[2]) ; 
            setImage(res.data.articles) ; 
            setData(res.data.articles) ; 
        })
        .catch(err=>{console.log(err)})
    }
    useEffect(()=>{
        setSearchParams({current}) ; 
    },[current,setSearchParams]) ; 
    const onChange = (currentPage) => {
        setCurrent(currentPage)
    }
    // console.log(data) 
    return (

        
        <div>
            
            <Flex  w='75%' m='auto' border='1px solid black'>
                {/* Box1 */}
                <Box border='1px solid black' w='65%'>
                    <Text textTransform={'uppercase'} fontSize={30} fontWeight={'bold'}>{pageName} News</Text>

                    <Box justifyContent='space-between' display='flex' w='95%' m='auto'  >
                        <Box  w='38%'><hr color='black'/></Box>
                        <Box w='20%'><Progress  colorScheme='yellow' size={'xs'} value={100}/></Box>
                        <Box w='38%'><hr color='black'/></Box>
                    </Box>
    
                    <ImageSlider  img1={i1} img3={i2} img2={i3} data={image}/>

                    <Box mt={5}>
                        {data?.map((item)=>{
                            return <Box pos={'relative'} mt={'100px'} key={item.author}>
                                <Image minH={'400px'} w={"100%"}  src={item.urlToImage?item.urlToImage:'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'} alt={item.author?item.author:"No Image"}/>
                                <Box p={4} mb={'10px'} bgColor={'white'} m='auto' pos={'absolute'} bottom='-100px' right='25px' w={"90%"}  textAlign={'left'}>
                                    <Box fontFamily={'arial'} fontWeight='bold' textDecoration={'underline'} textDecorationColor='yellow.500' textDecorationThickness={3} fontSize='sm' textTransform='uppercase' color={'#585858'}>{item.author}</Box>
                                    <Box fontFamily={'Playfair Display'} fontSize='2xl' fontWeight='1000'>{item.title}</Box>
                                    <Box fontFamily={'arial'} color='#333333' fontSize={"sm"}>{item.description}</Box>
                                </Box>
                            </Box>
                        })}
                    </Box>
                </Box>
                {/* Box2 */}
                <Box ml={5} border='1px solid black' w='30%'>
                    <Box  border={'1px solid black'}>
                        <EmailSubscribe  />
                    </Box>
                    <Box mt={20} top='30px' scrollBehavior={'smooth'} position='sticky'>
                        <MostRead />
                    </Box>
                </Box>
                       
            </Flex>
             <Paginations changingPage={onChange} currentPage={current} pageData = {page} />
        </div>
    )
}
export default AllPages ; 
