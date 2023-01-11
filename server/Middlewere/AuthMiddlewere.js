import Jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
        token = req.headers.authorization.split(" ")[1]

        const decoded = Jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id).select("-password")
        next()


    } catch (error) {
        console.error(error);
        res.status(401).send({ message: "No Authorized Token Faild" })
    }
  }
  if (!token) {
    res.status(401).send({ message: "No Authorized" });
  }
});

export default protect;

//   const abc = 4;
//   const abcd = 5;
//   if (abc == 4 && abcd == 3) {
//     console.log("ok");
//   }else{
//     console.log("not ok");
//   }