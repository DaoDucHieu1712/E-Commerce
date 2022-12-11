import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connect MONGODB successful !!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("server is running on port");
});
