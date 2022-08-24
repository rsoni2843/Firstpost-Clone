import { Button, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import styles from './Component.module.css'
import { Box,Flex,Image } from "@chakra-ui/react";
const LowerNavbar = ()=>{

    const pages = [
        {
            path:'/india',
            title:'India'
        },
        {
            path:'/world',
            title:'World'
        },
        {
            path:'/politics',
            title:'Politics'
        },
        {
            path:'/auto',
            title:'Auto'
        },
        {
            path:'/opinion',
            title:'Opinion'
        },
        {
            path:'/sports',
            title:'Sports'
        },
        {
            path:'/cricket',
            title:'Cricket'
        },
        {
            path:'/entertainment',
            title:'Entertainment'
        },
        {
            path:'/tech',
            title:'Tech'
        }

    ]

    return (
        <div >
            <Box  boxShadow='md' pt='3' rounded='sm' bg='white' display="flex" justifyContent="space-around">
            <Box w="70%"  >
            <ul className={styles.container2}>
                {pages.map((item)=>(
                    <li ><NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.default
                    }
                    to={item.path}>{item.title}</NavLink></li>
                ))}
            </ul>
            
            
            </Box>
            <Box  gap='18px' display="flex" justifyContent="start" w="30%">
            
            <NavLink to={'/crypto'}><Text  p='2px' bg='navy' color='white' fontWeight="bold" fontSize='xs' borderRadius='2px' border="none">Crypto</Text></NavLink>
          <Link><Text fontSize="sm" fontWeight="bold">IND VS ZIM 2022</Text></Link>  
            <Link isExternal href="https://www.news18.com/netrasuraksha/">
                    <Image src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg"/>
            </Link>
            </Box>
            </Box>
        </div>
    )
}
export default LowerNavbar ; 
