import express from "express";
import {
  availShortlet,
  bookShortlet,
  confirmBooking,
} from "../controllers/bookingControllers.js";

const router = express.Router();

router.post("/:id/book", bookShortlet);
router.patch("/:apartmentId/booking/:bookingId", confirmBooking);
router.patch("/:id/avail-shortlet", availShortlet);

export default router;
