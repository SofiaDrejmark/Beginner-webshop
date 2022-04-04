import React from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../stores/cart/atom";
import { productsState } from "../stores/products/atom";
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Skeleton,
} from "@chakra-ui/react";

function SingleProduct() {
  const [cart, setCart] = useRecoilState(cartState);
  const params = useParams();
  const products = useRecoilValue(productsState);
  const product = products.find((p) => {
    console.log(p);

    return p.id === parseInt(params.productId);
  });

  function addToCart(product) {
    const newCart = [...cart, product];
    setCart(newCart);
    console.log(newCart);
  }

  if (!product) return <Box>Loading...</Box>;

  return (
    <Stack alignItems="center">
      <Box>
        <Image
          maxWidth="300px"
          src={product.image}
          alt={product}
          draggable="false"
          fallback={<Skeleton />}
        />
        <Heading>{product.title}</Heading>
        <Text maxWidth="600px">{product.description}</Text>
        <Text fontWeight="bold">{product.price}€</Text>
        <Button
          colorScheme="blue"
          width="150px"
          onClick={() => addToCart(product)}
        >
          Buy
        </Button>
      </Box>
    </Stack>
  );
}

export default SingleProduct;
