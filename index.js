import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to mongodb.");
  } catch (e) {
    throw e;
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected");
})

app.use(cors());
app.use(cookieParser());

app.listen(8080, () => {
    connect();
    console.log("backend server is live!")
});
