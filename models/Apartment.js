import mongoose from "mongoose";

const ApartmentSchema = new mongoose.Schema(
  {
    apartmentNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    bedroomType: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Apartment", ApartmentSchema);
