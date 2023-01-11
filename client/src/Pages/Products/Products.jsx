import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../Components/Product-Card/ProductCard";

import { listProduct } from "../../Redux/Actions/ProductActions";
import "./product.scss";

const Products = () => {
  useEffect(() => {
    window.scroll({ top: "0", left: "0", behavior: "smooth" });
  }, []);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  // console.log(products)
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);

  return (
    <div className="card-set">
      {products.map((list, index) => (
        <ProductCard list={list} key={index} />
      ))}
    </div>
  );
};

export default Products;
