const express = require("express");
const {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const authenticateToken = require("../middlewares/authenticateToken");
const authorizeAdmin = require("../middlewares/authorizeAdmin"); // Assuming you have this middleware for admin authorization
const router = express.Router();

router.get("/", getAllEvents);
router.get("/:id", getEventById);
router.post("/", authenticateToken, authorizeAdmin, createEvent);
router.put("/:id", authenticateToken, authorizeAdmin, updateEvent);
router.delete("/:id", authenticateToken, authorizeAdmin, deleteEvent);

module.exports = router;
