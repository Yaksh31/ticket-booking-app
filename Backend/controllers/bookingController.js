const Booking = require("../models/Booking");
const Event = require("../models/Event");
const mongoose = require('mongoose'); // Import mongoose to use ObjectId

// Create a booking
const createBooking = async (req, res) => {
    try {
        let { event, seats, totalPrice } = req.body;

        console.log("Request Body:", req.body);

        // Validate request body
        if (!event || !seats || !totalPrice) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Ensure the event ID is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(event)) {
            return res.status(400).json({ message: "Invalid event ID" });
        }
        
        // Convert event ID to ObjectId
        event = mongoose.Types.ObjectId(event);
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
        console.error("Error creating booking:", error); // Improved error logging
        res.status(500).json({ message: "An error occurred while creating the booking" });
    }
};

// Get all bookings for the logged-in user
const getUserBookings = async (req, res) => {
    try {
        const userId = req.user.userId;
        const bookings = await Booking.find({ user: userId }).populate("event");
        res.json(bookings);
    } catch (error) {
        console.error("Error fetching user bookings:", error); // Improved error logging
        res.status(500).json({ message: "An error occurred while fetching bookings" });
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
        console.error("Error fetching booking:", error); // Improved error logging
        res.status(500).json({ message: "An error occurred while fetching the booking" });
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
            return res.status(403).json({ message: "Not authorized to cancel this booking" });
        }

        // Update the event's available seats
        const event = await Event.findById(booking.event);
        if (event) {
            event.seatsAvailable += booking.seats;
            await event.save();
        }

        // Delete the booking
        await booking.deleteOne({ _id: bookingId });
        res.json({ message: "Booking canceled" });
    } catch (error) {
        console.error("Error canceling booking:", error); // Improved error logging
        res.status(500).json({ message: "An error occurred while canceling the booking" });
    }
};

module.exports = {
    createBooking,
    getUserBookings,
    getBookingById,
    cancelBooking,
};