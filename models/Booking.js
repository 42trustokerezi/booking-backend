import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  apartmentNumber: {
    type: Number,
    required: true,
  },
  noOfDays: {
    type: Number,
    required: true,
  },
  bookingStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

export default mongoose.model("Booking", BookingSchema);
