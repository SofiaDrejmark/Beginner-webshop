import React from "react"
import CartComp from '../components/CartComp';
import { cartState } from '../stores/cart/atom';
import { useRecoilValue } from "recoil";

function Cart() {
  const products = useRecoilValue(cartState)


  return (
    <main>
      
        <CartComp products={products} />
    </main>
  )
}

export default Cart