const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  busId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bus'
  },
  seats: [Number],
  passengerDetails: [
    {
      name: String,
      age: Number,
      gender: String
    }
  ],
  totalPrice: Number
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);