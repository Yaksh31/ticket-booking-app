const express = require("express");
const { registerUser,loginUser,logoutUser,getProfile} = require("../controllers/userController");
const authenticateToken = require("../middlewares/authenticateToken");
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/logout",authenticateToken,logoutUser);
router.get("/profile",authenticateToken,getProfile);


module.exports = router;
