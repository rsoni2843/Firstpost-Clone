import React from 'react' ; 
import { CgCloseO } from 'react-icons/cg'; 
import {
    Drawer,
    Text,
    Box,
    DrawerBody,
    Stack,
    Radio,
    Button,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    RadioGroup,
    Icon,
    useDisclosure,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react' ;
  import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
  

function Draw() {
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')
  
    return (
      <>
        
        <Icon pr={1} ref={btnRef}  onClick={onOpen} as={HamburgerIcon} color="white" w={9} h={6} m='auto'/>
        
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        
          <DrawerOverlay />
          <DrawerContent>
            {/* <CgCloseO/> */}
          <DrawerCloseButton color='grey' rounded='50%' />
          
            <DrawerHeader p={6} borderBottomWidth='1px'></DrawerHeader>
            <DrawerBody>
              <Box 
              lineHeight={'50px'}>
                <Box borderBottomWidth={'2px'} ><Text 
                fontWeight={'bold'} 
                fontSize={'ms'} 
                color={'black'} 
                
                ml={'28px'}><Link onClick={onClose} to={'/'}>Home</Link></Text></Box>
                <Box borderBottomWidth={'2px'} ><Text 
                fontWeight={'bold'} 
                fontSize={'ms'} 
                color={'black'} 
                
                ml={'28px'}><Link onClick={onClose} to={'/'}>Home</Link></Text></Box>
                <Box borderBottomWidth={'2px'} ><Text 
                fontWeight={'bold'} 
                fontSize={'ms'} 
                color={'black'} 
                
                ml={'28px'}><Link onClick={onClose} to={'/'}>Home</Link></Text></Box>
                <Box borderBottomWidth={'2px'} ><Text 
                fontWeight={'bold'} 
                fontSize={'ms'} 
                color={'black'} 
                
                ml={'28px'}><Link onClick={onClose} to={'/'}>Home</Link></Text></Box>
                <Box borderBottomWidth={'2px'} ><Text 
                fontWeight={'bold'} 
                fontSize={'ms'} 
                color={'black'} 
                
                ml={'28px'}><Link onClick={onClose} to={'/'}>Home</Link></Text></Box>
                <Box borderBottomWidth={'2px'} ><Text 
                fontWeight={'bold'} 
                fontSize={'ms'} 
                color={'black'} 
                
                ml={'28px'}><Link onClick={onClose} to={'/'}>Home</Link></Text></Box>
                
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default Draw ; 
