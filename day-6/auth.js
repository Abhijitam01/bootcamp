const jwt = require('jsonwebtoken');

const JWT_SECRET = "raman2322";

function auth(req, res, next) {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1];  // Extract token

        const decoded = jwt.verify(token, JWT_SECRET);  // Verify token

        req.userId = decoded.id;  // Extract and set userId

        next();  // Continue to the next middleware
    } catch (error) {
        res.status(403).json({ message: "Invalid token" });
    }
}

module.exports = {
    auth,
    JWT_SECRET
};

