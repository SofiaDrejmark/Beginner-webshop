import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ReachLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { authState } from "../stores/Auth/atom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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

function Login() {
  const [auth, setAuth] = useRecoilState(authState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  function handleLogin() {
    axios
      .post("https://k4backend.osuka.dev/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        axios
          .get(`https://k4backend.osuka.dev/users/${res.data.userId}`)
          .then((userData) => {
            setAuth({
              user: userData.data,
              token: res.data.token,
            });
            console.log(userData);
            nav(userData.data.role === "user" ? "/userinfo" : "/admin");
          });
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
            <Heading>Log in to your account</Heading>
          </Stack>
        </Stack>
        <Box py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl onSubmit={handleSubmit}>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="username"
                  bg="whitesmoke"
                  placeholder="Username"
                />
              </FormControl>
              <FormControl onSubmit={handleSubmit}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  bg="whitesmoke"
                  placeholder="Password"
                />
              </FormControl>
            </Stack>
            <Stack spacing="6">
              <Button variant="primary" bg="#beccd6" onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Link as={ReachLink} to="/registration">
                Register
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
export default Login;
