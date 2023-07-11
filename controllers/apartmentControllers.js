import Apartment from "../models/Apartment.js";

export const uploadApartment = async (req, res) => {
  const { apartmentNumber, bedroomType, price } = req.body;

  try {
    const apartment = await Apartment.create({
      apartmentNumber,
      bedroomType,
      price,
    });

    res.status(201).json({ apartment });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getApartments = async (req, res) => {
  try {
    const apartments = await Apartment.find();
    res.status(200).json({ apartments });
  } catch (error) {
    res.status(404).json({ message: error.message });
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
      { isBooked: false },
      { new: true }
    );

    res
      .status(200)
      .json({ message: "You made this shortlet available for booking." });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const removeApartment = async (req, res) => {
  const { id } = req.params;

  try {
    const apartment = await Apartment.findById(id);
    if (!apartment) {
      return res.status(404).json({ message: "Apartment not found" });
    }

    await Apartment.findByIdAndRemove(id);
    res.json({ message: "Apartment removed successfully" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};
