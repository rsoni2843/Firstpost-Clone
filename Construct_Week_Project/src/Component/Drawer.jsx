import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    useDisclosure,
    Button,
    Input,
    Icon,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
  import {HamburgerIcon} from '@chakra-ui/icons' ; 
  function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
      <Icon pr={1} ref={btnRef} colorScheme='teal' onClick={onOpen} as={HamburgerIcon} color="white" w={9} h={6} m='auto'/>
        {/* <Button >
          Open
        </Button> */}
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
        //   finalFocusRef={btnRef}
        >
            
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            {/* <DrawerHeader>Create your account</DrawerHeader> */}
            <hr />
            <DrawerBody>
              {/* <Input placeholder='Type here...' /> */}
            </DrawerBody>
        
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample ; 
