const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // Retrieve token from the Authorization header
  const token = req.header('Authorization')?.split(' ')[1]; // Assuming Bearer token

  // Check if token is provided
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided" });
  }
  
  // Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to the request object
    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    console.error("Token verification error:", error); // Log error details
    res.status(403).json({ message: "Invalid token" }); // Use 403 for forbidden access
  }
};

module.exports = authenticateToken;
