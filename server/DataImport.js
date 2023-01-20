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
    // console.log(req.body.formData)
    // res.send(req)
    // // console.log(req.file)
    

    const importProducts = await Product.insertMany({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discountPercentage: req.body.discountPercentage,
      rating: 4.69,
      stock: 94,
      brand: req.body.brand,
      category: req.body.category,
      image: "null",
    });
    console.log(importProducts[0]);
    res.status(200).send({ result: "Product Added Successfully" });
    // console.log(req)

    ImportData.post(
      "/adminproduct/img",
      upload.single("image"),
      asyncHandler(async (req, res) => {
        console.log("reqName");
        const imageURL = `http://localhost:3001/productimageurl/${req.file.filename}`;
        // console.log(imageURL)
        const uploadImage = await Product.updateOne(
          { image: "null" },
          { image: imageURL }
        );
        console.log(uploadImage);
        const GetData = await Product.find({ image: "null" });
        console.log(GetData);
        res.send(GetData);
      })
    );



    // console.log(uploadImage)
    // await User.updateOne({ _id: userId }, { verified: true });
  })
);

export default ImportData;
