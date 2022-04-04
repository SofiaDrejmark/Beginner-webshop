import React from 'react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useRecoilState } from 'recoil';
import { cartState } from "../stores/cart/atom";
import { Box, SimpleGrid, Stack, Text, Button, Image, Heading} from "@chakra-ui/react";

function CartComp() {
const [cart, setCart] = useRecoilState(cartState)

const removeProduct = (cartProduct) => {
  let newCart = [...cart];
  newCart = newCart.filter((product) => cartProduct.id !==product.id);
  setCart(newCart)
}
  
if(!cart) return <Box>Your cart is empty</Box>;

  return (
<Box>
  <Heading>My Cart</Heading>
<SimpleGrid minChildWidth="200px" spacing={10}>
{cart.map((ci) => (
    <Stack key={ci.id} justifyContent="space-between">
    <Image src={ci.image} width="200px" alt="painting"/>
    <Text>{ci.title}</Text>
    <Text>{ci.price}</Text>
    <Button onClick={() => removeProduct(ci)}><DeleteIcon /></Button>
    </Stack>))}
</SimpleGrid>


  
  <Button>Proceed to Checkout</Button>
</Box>
  )
  }

export default CartComp 



/*

<SimpleGrid minChildWidth="200px" spacing={10}>
{products.map((product) => (
  <Stack key={product.id} justifyContent="space-between">
    <Box position="relative">
   
        <Image
          src={product.image}
          alt={product}
          draggable="false"
          fallback={<Skeleton />}
        />
     
    </Box>
    <Stack>
      <Stack spacing="1">
        <Text fontWeight="medium">{product.title}</Text>
        <Price price={product.price} currency="USD" />
      </Stack>
    </Stack>
    <Stack align="center">
      <Button
        onClick={() => addToCart(product)}
        colorScheme="blue"
        isFullWidth
      >
        Buy
      </Button>
      <Link
        to={`/productpage/${product.id}`}
        textDecoration="underline"
        fontWeight="medium"
      >
        See More
      </Link>
    </Stack>
  </Stack>
))}
</SimpleGrid>*/