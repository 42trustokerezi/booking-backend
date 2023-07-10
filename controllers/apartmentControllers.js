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
