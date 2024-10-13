const Payment = require("../models/Payment");
const Booking = require("../models/Booking");

// Process a payment
const processPayment = async (req, res) => {
  try {
    const { booking, amount, status, paymentMethod } = req.body;
    const user = req.user.userId; // User ID from the authentication middleware

    // Check if the booking exists
    const bookingDoc = await Booking.findById(booking);
    if (!bookingDoc) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Create the payment
    const payment = new Payment({
      user,
      booking,
      amount,
      status,
      paymentMethod
    });

    // Save the payment
    await payment.save();

    // Optionally, update the booking status or perform other actions
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get the payment status of a specific booking
const getPaymentStatus = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;

    // Find payment by booking ID
    const payment = await Payment.findOne({ booking: bookingId });
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found for this booking' });
    }

    res.json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  processPayment,
  getPaymentStatus
};
