const Booking = require("../models/Booking");
const Event = require("../models/Event");
const User = require("../models/User");

// Create a booking
const createBooking = async (req, res) => {
  try {
    const { event, seats, totalPrice } = req.body;
    const user = req.user.userId; // Assuming user ID is attached by auth middleware

    // Check if the event exists and has enough available seats
    const eventDoc = await Event.findById(event);
    if (!eventDoc) {
      return res.status(404).json({ message: "Event not found" });
    }
    if (eventDoc.seatsAvailable < seats) {
      return res.status(400).json({ message: "Not enough seats available" });
    }

    // Create the booking
    const booking = new Booking({
      user,
      event,
      seats,
      totalPrice,
    });

    // Save the booking
    await booking.save();

    // Update the event's available seats
    eventDoc.seatsAvailable -= seats;
    await eventDoc.save();

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all bookings for the logged-in user
const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.userId;
    const bookings = await Booking.find({ user: userId }).populate("event");
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific booking by ID
const getBookingById = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId).populate("event");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Cancel a booking
const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Check if the booking belongs to the logged-in user
    if (booking.user.toString() !== req.user.userId) {
      return res
        .status(403)
        .json({ message: "Not authorized to cancel this booking" });
    }

    // Update the event's available seats
    const event = await Event.findById(booking.event);
    event.seatsAvailable += booking.seats;
    await event.save();

    // Delete the booking
    await booking.deleteOne({ _id: bookingId });
    res.json({ message: "Booking canceled" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  getBookingById,
  cancelBooking,
};
