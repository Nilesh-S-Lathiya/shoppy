import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Main-Components/Footer/Footer";
import Header from "../Main-Components/Header/Header";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

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
        </Route>
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Main;
