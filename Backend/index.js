// Load environment variables from .env file:
require("dotenv").config();

const express = require("express");
const connectDB = require("./config/database");
const app = express();
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const PORT = process.env.PORT || 3000;

// connect to MongoDB Database
connectDB();

// Middleware to parse JSON bodies:
app.use(express.json());

// Routes:
app.get("/", (req, res) => {
  res.send("Welcome to ticket booking application!");
});

app.use("/api/users", userRoutes);
app.use("/api/events",eventRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/payments",paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
