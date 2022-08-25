import React from 'react' ; 
import { CgCloseO } from 'react-icons/cg'; 
import {
    Drawer,
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
          
            <DrawerHeader borderBottomWidth='1px'></DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default Draw ; 
