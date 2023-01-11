import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Main-Components/Footer/Footer";
import Header from "../Main-Components/Header/Header";
import Cart from "../Pages/Cart/Cart";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
import Register from "../Pages/Register/Register";

const Main = () => {
  return (
    <>
      <Header />
      <div style={{
        marginTop:"85px"
      }}>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Main;
