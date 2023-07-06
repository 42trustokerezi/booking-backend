import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    userid: {
        type: Number
    },
    apartmentNumber: {},
    bookStatus: {
        type: String,
        enum: ["pending", "active", "rejected"]
    }
});