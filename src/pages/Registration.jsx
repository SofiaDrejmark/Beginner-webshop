import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { authState } from "../stores/Auth/atom";
import { Link, useNavigate } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

function Registration() {
  const [auth, setAuth] = useRecoilState(authState);
  const nav = useNavigate();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    role: "user",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    zipcode: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://k4backend.osuka.dev/users", {
        email: user.email,
        username: user.username,
        password: user.password,
        name: {
          firstname: user.firstname,
          lastname: user.lastname,
        },
        address: {
          city: user.city,
          street: user.street,
          number: user.number,
          zipcode: user.zipcode,
        },
        phone: user.phone,
      })
      .then((res) => {
        axios
          .post("https://k4backend.osuka.dev/auth/login", {
            username: res.data.username,
            password: res.data.password,
          })
          .then((res) => {
            axios
              .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
              .then((userData) => {
                setAuth({
                  user: userData.data,
                  token: res.data.token,
                })
              }).catch((error) => console.log(error));
          });

        nav("/userinfo");
      });
  };
  return (
    <Stack>
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
        border="black solid 1px"
        mt="50px"
        mb="50px"
        borderRadius="20px"
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading>Create Your Account</Heading>
            </Stack>
          </Stack>
          <Box py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }}>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    id="email"
                    type="email"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                    id="username"
                    type="text"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    id="password"
                    type="password"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="firstname">Firstname</FormLabel>
                  <Input
                    value={user.firstname}
                    onChange={(e) =>
                      setUser({ ...user, firstname: e.target.value })
                    }
                    id="firstname"
                    type="text"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="lastname">Lastname</FormLabel>
                  <Input
                    value={user.lastname}
                    onChange={(e) =>
                      setUser({ ...user, lastname: e.target.value })
                    }
                    id="lastname"
                    type="text"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="city">City</FormLabel>
                  <Input
                    value={user.city}
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                    id="city"
                    type="text"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="street">Street</FormLabel>
                  <Input
                    value={user.street}
                    onChange={(e) =>
                      setUser({ ...user, street: e.target.value })
                    }
                    id="street"
                    type="text"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="number">Number</FormLabel>
                  <Input
                    value={user.number}
                    onChange={(e) =>
                      setUser({ ...user, number: e.target.value })
                    }
                    id="number"
                    type="number"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="zipcode">Zipcode</FormLabel>
                  <Input
                    value={user.zipcode}
                    onChange={(e) =>
                      setUser({ ...user, zipcode: e.target.value })
                    }
                    id="zipcode"
                    type="number"
                    bg="whitesmoke"
                  />
                </FormControl>
                <FormControl onSubmit={handleSubmit}>
                  <FormLabel htmlFor="phone">Phone</FormLabel>
                  <Input
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                    id="phone"
                    type="number"
                    bg="whitesmoke"
                  />
                </FormControl>
              </Stack>

              <Stack spacing="6">
              
                <Button onClick={handleSubmit}
                  variant="primary"
                  type="submit"
                  bg="whitesmoke"
                  value="register"
                >
                  Register
                </Button>
                
              </Stack>
              <HStack spacing="1" justify="center">
                <Text color="muted">Allready have an account?</Text>
                <Link as={ReachLink} to="/login">
                  Sign in
                </Link>
              </HStack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Registration;
