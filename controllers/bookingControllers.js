import Booking from "../models/Booking.js";
import Apartment from "../models/Apartment.js";

export const bookShortlet = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phoneNumber, noOfDays } = req.body;

  const apartment = await Apartment.findById(id);
  if (!apartment) {
    return res.status(404).json({ message: "Apartment not found" });
  }
  if (apartment.isBooked) {
    return res.status(404).json({ message: "Apartment is not available" });
  }
  try {
    const booking = await Booking.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      apartmentNumber: apartment.apartmentNumber,
      noOfDays,
    });

    await Apartment.updateOne(
      { _id: apartment._id },
      { isBooked: true },
      { new: true }
    );

    res.status(201).json({ booking });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const confirmBooking = async (req, res) => {
  const { apartmentId, bookingId } = req.params;
  const { status } = req.body;

  const apartment = await Apartment.findById(apartmentId);
  if (!apartment) {
    return res.status(404).json({ message: "Apartment not found" });
  }
  const booking = await Booking.findById(bookingId);
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }
  try {
    await Booking.updateOne(
      { _id: bookingId },
      { bookingStatus: status },
      { new: true }
    );

    res.status(200).json({ message: `You have ${status} this booking.` });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const availShortlet = async (req, res) => {
  const { id } = req.params;

  const apartment = await Apartment.findById(id);
  if (!apartment) {
    return res.status(404).json({ message: "Apartment not found" });
  }

  try {
    await Apartment.updateOne(
      { _id: apartment._id },
      { isBooked: true },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "You made this shortlet available for booking." });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
