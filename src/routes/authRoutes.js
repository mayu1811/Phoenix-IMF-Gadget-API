const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Dummy user for authentication (You can replace it with a database later)
const users = [
    { username: "admin", password: "password123" }, // Default username & password
];

// Login API
router.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    // Generate JWT Token
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET || "your-secret-key", {
        expiresIn: "1h",
    });

    res.json({ token });
});

module.exports = router;
