const express = require("express");
const {
  createBooking,
  getUserBookings,
  getBookingById,
  cancelBooking,
} = require("../controllers/bookingController");
const authenticateToken = require("../middlewares/authenticateToken");
const router = express.Router();

router.post("/", authenticateToken, createBooking);
router.get("/", authenticateToken, getUserBookings);
router.get("/:id", authenticateToken, getBookingById);
router.delete("/:id", authenticateToken, cancelBooking);

module.exports = router;
