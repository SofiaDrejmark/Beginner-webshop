import React, { useEffect } from "react";
import axios from "axios";
import { Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import { useResetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import { authState } from "../stores/Auth/atom";
import { productsState } from "../stores/products/atom";
import { usersState } from "../stores/users/atom";

function Admin() {
  const auth = useRecoilValue(authState);
  const reset = useResetRecoilState(authState);
  const [users, setUsers] = useRecoilState(usersState);

  const products = useRecoilValue(productsState);

  function getUsers() {
    axios
      .get("https://k4backend.osuka.dev/users")
      .then((res) => {
        setUsers(res.data);
        res.data = users;
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Stack>
      <Heading>Admin page</Heading>
      <Heading>Usernames</Heading>
      <SimpleGrid>{users.map((user) => user.username)}</SimpleGrid>

      <Heading>Products</Heading>
      <SimpleGrid>{products.map((product) => product.title)}</SimpleGrid>
      <Link as={ReachLink} to="/login" onClick={reset}>
        Logout
      </Link>
    </Stack>
  );
}

export default Admin;
