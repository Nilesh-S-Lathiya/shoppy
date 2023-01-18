import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middlewere/AuthMiddlewere.js";
import sendOtpVerification from "../Models/OtpVerify.js";
import User from "../Models/UserModel.js";
import UserOTPVerification from "../Models/UserOTPVerification.js";
import generateToken from "../utils/generateToken.js";

const userRouter = express.Router();

//LOGIN
userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.password) === password) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(406).send({ message: "Invaild Email or Password" });
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

    var user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      // console.log(email)
      sendOtpVerification(user._id, name, email, password);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        verified: user.verified,
        createdAt: user.createdAt,
      });
    } else {
      res.status(400).send({ message: "Invalid User Data" });
    }
  })
);

// Verify Otp
userRouter.post("/verify", async (req, res) => {
  try {
    let { userId, otp } = req.body;
    if (!userId || !otp) {
      throw Error("Empty otp details are not allowed");
    } else {
      const UserOtpVerificationRecord = await UserOTPVerification.find({
        userId,
      });
      if (UserOtpVerificationRecord.length <= 0) {
        throw Error(
          "Account record doesn't exist or has been verified already. Please Sign up or login"
        );
      } else {
        const { expiresAt } = UserOtpVerificationRecord[0];
        const userotp = UserOtpVerificationRecord[0].otp;

        if (expiresAt < Date.now()) {
          await UserOTPVerification.deleteMany({ userId });
          throw new Error("Code is Expired. Please verify again ");
        } else {
          const validOtp = userotp === otp ? otp : null;

          if (!validOtp) {
            throw new Error("Invalid Code passed, Check code and try again");
          } else {
            await User.updateOne({ _id: userId }, { verified: true });
            await UserOTPVerification.deleteMany({ userId });
            const userData = await User.find({ _id: userId });
            // console.log(userData);
            res.json({
              _id: userData[0]._id,
              name: userData[0].name,
              email: userData[0].email,
              isAdmin: userData[0].isAdmin,
              verified: userData[0].verified,
              createdAt: userData[0].createdAt,
            });
          }
        }
      }
    }
  } catch (error) {
    // console.log(error);
    res.json(error);
  }
});

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
    }
  })
);

export default userRouter;
