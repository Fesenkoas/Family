import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import employeeRoute from "./routes/employee.js";

const app = express();
dotenv.config();

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT || 5000;
const PASSWORD = process.env.DB_PASSWORD;
const USER = process.env.DB_USER;

//MiddleWare

app.use(cors());
app.use(express.json());

//Routes
//http://localhost:3002
app.use("/api", employeeRoute);

async function start() {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`);
    app.listen(PORT, () => console.log(`Server started ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
