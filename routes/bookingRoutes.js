import express from "express";
import {
  bookShortlet,
  confirmBooking,
} from "../controllers/bookingControllers.js";

// validators
import { runValidation } from "../validators/index.js";
import {
  bookingValidator,
  confirmBookingValidator,
} from "../validators/bookingValidator.js";

const router = express.Router();

router.post(
  "/:apartmentId/book",
  bookingValidator,
  runValidation,
  bookShortlet
);
router.patch(
  "/:id/confirm",
  confirmBookingValidator,
  runValidation,
  confirmBooking
);

export default router;
