import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middlewere/AuthMiddlewere.js";
import User from "../Models/UserModel.js";
import generateToken from "../utils/generateToken.js";

const userRouter = express.Router();

//LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({
      email: email,
    });
    // console.log(user);
    const pass = await user.matchPassword(password);
    // console.log(pass)
    if (user) {
      if (pass) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user._id),
          createdAt: user.createdAt,
        });
      } else {
        res.status(401).send( "Invaild Password");
      }
    } else {
      res.status(401).send({ result: "Invaild email" });
    }
  })
);
// REGISTER

userRouter.post(
  "/register",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(400).send({ message: "User Already Exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).send({ message: "Invalid User Data" });
    }
  })
);

//USER PROFILE
userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404).send({ result: "User Not" });
      // throw new Error("Invaild Password");
      // console.log("password");
    }
  })
);

export default userRouter;
