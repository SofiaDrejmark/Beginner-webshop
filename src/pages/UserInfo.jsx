import React from "react";
import { Stack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { authState } from "../stores/Auth/atom";


function UserInfo() {
  const {user} = useRecoilValue(authState);
  const reset = useResetRecoilState(authState);

if (!user) {
  return <Text>Sign in please..</Text>
}



  return (
    <Stack justifyContent="center" alignItems="center">
      <Heading>My Account</Heading>
      <Text>Username: {user.username}</Text>
      <Text>Firstname: {user.name.firstname}</Text>
      <Text>Lastname: {user.name.lastname}</Text>
      <Text>Address: {user.address.city} {user.address.street} {user.address.number} {user.address.zipcode}</Text>
      <Text>Phone: {user.phone}</Text>
      
      <Button as={ReachLink} to="/login" variant="primary" width="150px" bg="#beccd6" onClick={reset}>
        Logout
      </Button>
    </Stack>
  );
}

export default UserInfo;
