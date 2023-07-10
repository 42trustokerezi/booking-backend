import { check } from "express-validator";

export const apartmentValidator = [
  check("apartmentNumber")
    .not()
    .isEmpty()
    .withMessage("Apartment number is required"),
  check("bedroomType").not().isEmpty().withMessage("Bedroom type is required"),
  check("price").not().isEmpty().withMessage("Price is required"),
];
