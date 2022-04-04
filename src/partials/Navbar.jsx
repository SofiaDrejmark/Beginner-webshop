import React from "react";
import { Link } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

function Navbar() {
  return (
    <HStack spacing="20px" justifyContent="center" pt="20px">
      <Link as={ReachLink} to="/">
        Home
      </Link>

      <Link as={ReachLink} to="/productpage">
        Shop
      </Link>
    </HStack>
  );
}

export default Navbar;
