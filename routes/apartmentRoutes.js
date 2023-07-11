import express from "express";
import {
  availShortlet,
  getApartments,
  removeApartment,
  uploadApartment,
} from "../controllers/apartmentControllers.js";

// validators
import { runValidation } from "../validators/index.js";
import { apartmentValidator } from "../validators/apartmentValidator.js";

const router = express.Router();

router.post("/", apartmentValidator, runValidation, uploadApartment);
router.get("/", getApartments);
router.patch("/:id/avail-shortlet", availShortlet);
router.delete("/:id/remove", removeApartment);

export default router;
