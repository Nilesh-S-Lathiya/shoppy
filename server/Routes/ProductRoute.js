import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./../Models/ProductModel.js";

const productRoute = express.Router();

// GET ALL PRODUCTS
productRoute.get(
  "/p",
  asyncHandler(async (req, res) => {
    // console.log("object")
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const products = await Product.find({ ...keyword });
    res.json(products);
  })
);

// GET SINGLE PRODUCT
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

productRoute.post(
  "/delete",
  asyncHandler(async (req, res) => {
    console.log(req.body.id)
    const result = await Product.deleteOne({ _id: req.body.id });
    if (result.deletedCount === 1) {
      res.send("Delete Successfully");
    } else {
      res.send("Somthing wrong");
    }
  }
  )
);

export default productRoute;
