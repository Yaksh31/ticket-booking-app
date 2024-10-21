const mongoose = require('mongoose');

// Booking Schema
const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true, // Index for faster lookups
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true,
        index: true, // Index for faster lookups
    },
    seats: {
        type: Number,
        required: true,
        min: 1, // Minimum of 1 seat
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0, // Total price cannot be negative
    },
    status: {
        type: String,
        enum: ['booked', 'canceled', 'pending'], // Added 'pending' for future use
        default: 'booked',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Booking model
const Booking = mongoose.model('Booking', bookingSchema);   
module.exports = Booking;