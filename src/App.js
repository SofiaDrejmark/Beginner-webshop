import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import ProductPage from './pages/ProductPage';
import axios from "axios"
import Login from './pages/Login';
import React, { useEffect } from "react";
import UserInfo from './pages/UserInfo';
import Registration from './pages/Registration';
import { productsState } from "./stores/products/atom";
import { useRecoilState } from "recoil";
import Admin from './pages/Admin';
import { useRecoilValue } from 'recoil';
import { authState } from './stores/Auth/atom';

function App() {
  const [products, setProducts] = useRecoilState(productsState);
const auth = useRecoilValue(authState);

  function getProducts() {
    axios
      .get("https://k4backend.osuka.dev/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="MyApp">
<Header />
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="/productpage" element={<ProductPage/>}/>
<Route path="/productpage/:productId" element={<SingleProduct />}/>
<Route path="/cart" element={<Cart />}/>

{auth.token ? (
<><Route path="/userinfo" element={<UserInfo />}/></>):
( <><Route path="/login" element={<Login />}/>
<Route path="/registration" element={<Registration />}/></>
)}

{auth.user.role === "admin" && (
<Route path="/admin" element={<Admin />}/>
  )}


    </Routes>
  
    </div>
  );
}

export default App;
