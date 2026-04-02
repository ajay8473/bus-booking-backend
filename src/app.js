const express = require('express');
const cors = require('cors');

const busRoutes = require('./routes/bus.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/buses', busRoutes);
app.use('/api/bookings', bookingRoutes);

module.exports = app;