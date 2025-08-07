const express = require("express");
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeAdmin = require("../middlewares/authorizeAdmin");
const router = express.Router();

// Public routes
router.get("/", getAllEvents);
router.get("/events/:id", getEventById);

// Admin-protected routes
router.post("/", authenticateToken, authorizeAdmin, createEvent);
router.put("/:id", authenticateToken, authorizeAdmin, updateEvent);
router.delete("/:id", authenticateToken, authorizeAdmin, deleteEvent);

module.exports = router;
