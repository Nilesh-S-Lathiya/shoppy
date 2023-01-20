import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import {

  listProductDetails,
} from "../../../Redux/Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [image, setFile] = useState();
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [id, dispatch]);

  const productDetails = useSelector((state) => state.productDetails);

  const { product } = productDetails;
  console.log(product);

  const handleUpdateProduct = () => {};

  return (
    <div className="w-full">
      <div className=" flex  justify-center text-[50px] p-3">
        <span>Update Product</span>
      </div>

      <Container>
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap justify-around">
            <form
              action=""
              onSubmit={handleUpdateProduct}
              className="flex flex-wrap justify-around"
            >
              <label htmlFor="ProductName" className="text-[20px] w-[80%]">
                Product Name
              </label>
              <input
                type="text"
                className="w-[80%] border border-black mb-6 rounded-[9px] py-3 px-3"
                id="ProductName"
                name="ProductName"
                value={product ? product.name : name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="ProductDescription"
                className="text-[20px] w-[80%]"
              >
                Description
              </label>
              <input
                type="text"
                className="w-[80%] border border-black mb-6 rounded-[9px] py-3 px-3"
                id="ProductDescription"
                name="ProductDescription"
                value={product ? product.description : description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <label htmlFor="price" className="text-[20px] w-[80%]">
                Price
              </label>
              <input
                type="number"
                className="w-[80%] border border-black mb-6 rounded-[9px] py-3 px-3"
                id="price"
                name="price"
                value={product ? product.price : price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label htmlFor="Stock" className="text-[20px] w-[80%]">
                Product Stock
              </label>
              <input
                type="number"
                className="w-[80%] border border-black mb-6 rounded-[9px] py-3 px-3"
                id="Stock"
                name="Stock"
                value={product ? product.countInStock : stock}
                onChange={(e) => setStock(e.target.value)}
              />
              <label htmlFor="Image" className="text-[20px] w-[80%]">
                Product Image
              </label>
              <input
                type="file"
                className="w-[80%] border border-black mb-6 rounded-[9px] py-3 px-3"
                id="Image"
                name="image"
                // value={image}
                onChange={(e) => setFile(e.target.files[0])}
                
                />
              <input
                type="submit"
                className="w-[80%]  mb-6 rounded-[9px] py-3 px-3 bg-blue-400 cursor-pointer"
                id="Image"
                value="UPDATE PRODUCT"
              />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateProduct;
