import express from "express";
import asyncHandler from "express-async-handler";
import users from "./data/User.js";
import User from "./Models/UserModel.js";
import Product from "./Models/ProductModel.js";
import product from "./data/product.js";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);
ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(product);
    res.send({ importProducts });
  })
);

export default ImportData;
