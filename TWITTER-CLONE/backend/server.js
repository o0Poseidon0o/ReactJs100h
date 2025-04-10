import express from "express";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";

import cookieParser from "cookie-parser"

import connectMongoDB from "./db/connectMongoDB.js";



dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json()); //allows us to accept JSON data in the req.body
app.use(express.urlencoded({ extended: true })); //to parse form data (urlendcode)


app.use(cookieParser());

// console.log(process.env.MONGO_URI);

app.use("/api/auth",authRouter)

app.listen(8000, () => {
  console.log("Server start at " + PORT);
  connectMongoDB();
});
