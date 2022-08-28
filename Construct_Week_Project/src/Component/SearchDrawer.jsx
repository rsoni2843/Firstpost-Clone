import React, { useState } from 'react'
import { CgCloseO } from 'react-icons/cg';
import { Search2Icon,CloseIcon} from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,

    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Button,
    Input,
    Icon,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'

function SearchDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('top')
    const [value,setValue] = useState("") ; 

    return (
      <>
        
        <Icon onClick={onOpen} m='auto' color='white' as={isOpen?CgCloseO:Search2Icon} cursor='pointer'/>
        
        <Drawer  size={'md'} placement={placement} onClose={onClose} isOpen={isOpen}>
          
          <DrawerContent w='85%' bgColor='black'>
          
            <DrawerBody  w='68%' display='flex' m='auto' color='white' bgColor='black'>
            <Input value={value}  textAlign='left' size={'xs'} p='12px' placeholder="Search"/>
            </DrawerBody>
          </DrawerContent> 
          
        </Drawer>
      </>
    )
  }
  export default SearchDrawer ; 
