import express from "express";
import { uploadApartment } from "../controllers/apartmentControllers.js";

const router = express.Router();

router.post("/", uploadApartment);

export default router;
