import express from "express";
import asyncHandler from "express-async-handler";
import Product from "./Models/ProductModel.js";
import product from "./data/product.js";
import multer from "multer";
import path from "path";

const productRoute = express.Router();
const ImportData = express.Router();
const app = express();

const Storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: Storage,
});

//  BULK DATA IMPORT

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(product);
    res.send({ importProducts });
  })
);

// IMPORT DATA FROM ADMIN
ImportData.post(
  "/adminproduct",
  upload.single("image"),
  asyncHandler(async (req, res) => {
    // console.log(req.file)
    const imageURL = `http://localhost:3001/productimageurl/${req.file.filename}`;
    // console.log(imageURL)

    const importProducts = await Product.insertMany({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discountPercentage: req.body.discountPercentage,
      rating: 4.69,
      stock: 94,
      brand: req.body.brand,
      category: req.body.category,
      image: imageURL,
    });
    res.send({ importProducts });
  })
);

export default ImportData;
