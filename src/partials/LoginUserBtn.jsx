import React from "react";
import { Link } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import { HStack } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri"
import { BsPerson } from "react-icons/bs";
import { authState } from "../stores/Auth/atom";
import { useRecoilValue } from "recoil";

function LoginUserBtn() {
  const auth = useRecoilValue(authState);



  return (
    <HStack spacing="20px" justifyContent="flex-end" pb="10px" pr="30px">

<Link as={ReachLink} to="/admin" className="adminbtn">
<RiAdminLine />
</Link>

      <Link as={ReachLink} 
      to={auth.token ? "/userinfo" : "/login"}>
        <BsPerson />
      </Link>

      <Link as={ReachLink} to="/cart">
        <FiShoppingCart />
      </Link>
    </HStack>
  );
}

export default LoginUserBtn;
