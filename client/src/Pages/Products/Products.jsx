import React from "react";
import ProductCard from "../../Components/Product-Card/ProductCard";
import ProductDataApi from "../../Components/ProductData";
import "./product.scss";

const Products = () => {
  return (
    <div className="card-set">
      {ProductDataApi.map((list, index) => (
        <ProductCard list={list} key={index} />
      ))}
    </div>
  );
};

export default Products;
