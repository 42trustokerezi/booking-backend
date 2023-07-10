import { check } from "express-validator";

export const bookingValidator = [
  check("firstName").not().isEmpty().withMessage("First name is required"),
  check("lastName").not().isEmpty().withMessage("Last name is required"),
  check("email").isEmail().withMessage("Must be a valid email address"),
  check("phoneNumber").not().isEmpty().withMessage("Phone number is required"),
  check("noOfDays").not().isEmpty().withMessage("No of days is required"),
];

export const confirmBookingValidator = [
  check("status").not().isEmpty().withMessage("Status is required"),
];
