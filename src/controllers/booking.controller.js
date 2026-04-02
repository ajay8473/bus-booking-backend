const Booking = require('../models/booking.model');
const Bus = require('../models/bus.model');

// POST /api/bookings
exports.createBooking = async (req, res) => {
  try {
    const { busId, seats, passengerDetails } = req.body;

    const bus = await Bus.findById(busId);

    // check availability
    const unavailableSeats = bus.seats.filter(
      s => seats.includes(s.seatNumber) && !s.isAvailable
    );

    if (unavailableSeats.length > 0) {
      return res.status(400).json({
        message: "Some seats are already booked"
      });
    }

    // mark seats booked
    bus.seats.forEach(seat => {
      if (seats.includes(seat.seatNumber)) {
        seat.isAvailable = false;
      }
    });

    await bus.save();

    const totalPrice = seats.length * bus.price;

    const booking = await Booking.create({
      busId,
      seats,
      passengerDetails,
      totalPrice
    });

    res.json({
      message: "Booking successful",
      booking
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};