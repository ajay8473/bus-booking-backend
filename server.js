require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./src/config/db");

const app = express();

// 🔥 DB connect
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
const busRoutes = require("./src/routes/bus.routes");
const bookingRoutes = require("./src/routes/booking.routes");

app.use("/api/buses", busRoutes);
app.use("/api/bookings", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});