import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useRecoilState } from "recoil";
import { cartState } from "../stores/cart/atom";
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Button,
  Image,
  Heading,
} from "@chakra-ui/react";

function CartComp() {
  const [cart, setCart] = useRecoilState(cartState);

  const removeProduct = (cartProduct) => {
    let newCart = [...cart];
    newCart = newCart.filter((product) => cartProduct.id !== product.id);
    setCart(newCart);
  };

  if (!cart) return <Box>Your cart is empty</Box>;

  return (
    <Box>
      <Heading>My Cart</Heading>
      <SimpleGrid minChildWidth="200px" spacing={10}>
        {cart.map((ci) => (
          <Stack key={ci.id} justifyContent="space-between">
            <Image src={ci.image} width="200px" alt="painting" />
            <Text>{ci.title}</Text>
            <Text fontWeight="bold">{ci.price}€</Text>
            <Button width="150px" onClick={() => removeProduct(ci)}>
              <DeleteIcon />
            </Button>
          </Stack>
        ))}
      </SimpleGrid>

      <Button mt="40px">Proceed to Checkout</Button>
    </Box>
  );
}

export default CartComp;
