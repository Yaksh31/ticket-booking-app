// authorizeAdmin.js

const authorizeAdmin = (req, res, next) => {
    // Check if the user information is available (req.user should be populated by the authenticateToken middleware)
    if (req.user && req.user.role === "admin") {
      next(); // User is an admin, proceed to the next middleware or route handler
    } else {
      res.status(403).json({ message: "Access denied. Admins only." });
    }
  };
  
  module.exports = authorizeAdmin;
  