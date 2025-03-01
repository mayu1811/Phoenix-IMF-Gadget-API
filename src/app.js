const express = require("express");
const cors = require("cors");
const equipmentRoutes = require("./routes/equipmentRoutes");
const authRoutes = require("./routes/authRoutes"); // Import authentication routes
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/gadgets", equipmentRoutes);
app.use("/auth", authRoutes); // Register authentication routes

module.exports = app;
