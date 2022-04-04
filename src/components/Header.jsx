import React from "react";
import Navbar from "../partials/Navbar";
import { Heading, Stack, Text } from "@chakra-ui/react";
import LoginUserBtn from "../partials/LoginUserBtn";

function Header() {
  return (
    <Stack bg="#beccd6">

      <Text textAlign="center" color="white" bg="#00000042">Free express shipping over €300</Text>
        <Heading textAlign="center" fontWeight="thin" pt="20px">
          THE SHOP
          </Heading>
        
        <Navbar />
      <LoginUserBtn />

    </Stack>
  );
}

export default Header;
