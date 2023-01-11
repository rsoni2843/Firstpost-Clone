import React, { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { Search2Icon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  useDisclosure,
  Input,
  Icon,
  DrawerContent,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function SearchDrawer() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("top");
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(value);
      navigate(`news/${value}`);
      // navigate("/news/" + { state: value, replace: true });
    }
  };
  return (
    <>
      <Icon
        onClick={onOpen}
        m="auto"
        color="white"
        as={isOpen ? CgCloseO : Search2Icon}
        cursor="pointer"
      />

      <Drawer
        size={"md"}
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerContent w="85%" bgColor="black">
          <DrawerBody
            w="68%"
            display="flex"
            m="auto"
            color="white"
            bgColor="black"
          >
            
            <Input
              id="one"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              onKeyDown={handleKeyDown}
              textAlign="left"
              size={"xs"}
              p="12px"
              placeholder="Search"
            />
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default SearchDrawer;
