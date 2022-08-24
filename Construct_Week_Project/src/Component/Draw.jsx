import React from 'react'
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
        {/* <RadioGroup defaultValue={placement} onChange={setPlacement}>
          <Stack direction='row' mb='4'>
            <Radio value='top'>Top</Radio>
            <Radio value='right'>Right</Radio>
            <Radio value='bottom'>Bottom</Radio>
            <Radio value='left'>Left</Radio>
          </Stack>
        </RadioGroup> */}
        <Icon pr={1} ref={btnRef} colorScheme='teal' onClick={onOpen} as={HamburgerIcon} color="white" w={9} h={6} m='auto'/>
        {/* <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        
          <DrawerOverlay />
          <DrawerContent>
          <DrawerCloseButton />0
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
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
