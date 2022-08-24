import React from 'react'
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
        <Icon onClick={onOpen} m='auto' color='white' as={isOpen?CloseIcon:Search2Icon}/>
        {/* <Button colorScheme='blue' onClick={onOpen}>
          Open
        </Button> */}
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          
            <DrawerBody>
             <Input w={3}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default SearchDrawer ; 
