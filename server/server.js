import express from "express";
import TodaySProduct from "./data/TodaySpecialProduct.js";
import dotenv from "dotenv";
import connectDatabase from "./Config/mongodb.js";
import ImportData from "./DataImport.js";
import { errorHandler, notFount } from "./Middlewere/Error.js";
import productRoute from "./Routes/ProductRoute.js";
import userRouter from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())

// Lord Today Special From Server
app.get("/api/products/today", (req, res) => {
  res.json(TodaySProduct);
});

app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);

app.use(notFount);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server Started on Port ${PORT}`));
