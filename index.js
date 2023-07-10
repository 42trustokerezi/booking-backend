import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import bookingRoutes from "./routes/bookingRoutes.js";
import apartmentRoutes from "./routes/apartmentRoutes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ origin: "*" }));

app.use("/shortlet", bookingRoutes);
app.use("/shortlet", apartmentRoutes);

// middlewares for error handling
app.use((req, res) =>
  res.status(404).json({ message: "Route does not exists" })
);

// connect to mongodb
connectDB();

// Port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
