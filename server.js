require("dotenv").config();

const express = require("express");
const app = express();

//  middleware
app.use(express.json());

//  routes import
const busRoutes = require("./src/routes/bus.routes");
const bookingRoutes = require("./src/routes/booking.routes");

// debuging
console.log("BUS routes:", busRoutes)
//  routes use
app.use("/api/buses", busRoutes);
app.use("/api/bookings", bookingRoutes);

//  root test route
app.get("/", (req, res) => {
  res.send("Backend is running ");
});

//  server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});