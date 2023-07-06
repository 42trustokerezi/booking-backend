import mongoose from "mongoose";

const ApartmentSchema = new mongoose.Schema({
  apartmentNumber: {
    type: Number
  },
  bedroomType: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
  },
  isBooked: {
    type: Boolean,
    default: false,
  }
},{
    timestamps: true
  });

  export default mongoose.model("Apartment", ApartmentSchema);