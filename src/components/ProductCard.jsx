import React from "react";
import { Link } from "react-router-dom";
import { cartState } from "../stores/cart/atom";
import { productsState } from "../stores/products/atom";
import { useRecoilValue, useRecoilState} from "recoil";
import {
  Stack,
  Box,
  Image,
  Text,
  Button,
  Skeleton, 
  SimpleGrid
} from "@chakra-ui/react";

function ProductCard() {
 const products = useRecoilValue(productsState);
  const [cart, setCart] = useRecoilState(cartState);

  
  if (!products) return <p>Loading...</p>;

  function addToCart(product) {
    const newProduct = {...product, id: Math.random()}
    const newCart = [...cart, newProduct]; 
    setCart(newCart);
    
  }



  return (
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
              <Text fontWeight="bold">{product.price}€</Text>
            </Stack>
          </Stack>
          <Stack align="center">
            <Button
              onClick={() => addToCart(product)}
              colorScheme="blue"
              isFullWidth
            >
              Add To Cart
            </Button>
            <Button as={Link}
              to={`/productpage/${product.id}`}
              textDecoration="underline"
              fontWeight="medium"
              colorScheme="teal"
              isFullWidth
            >
              View Product
            </Button>
          </Stack>
        </Stack>
      ))}
    </SimpleGrid>
  );
}

export default ProductCard;
