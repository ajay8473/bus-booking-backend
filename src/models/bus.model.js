const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  seatNumber: Number,
  isAvailable: { type: Boolean, default: true },
  row: Number,
  column: Number,
  seatType: String // normal / sleeper / semi-sleeper
});

const busSchema = new mongoose.Schema({
  name: String,
  departureCity: String,
  arrivalCity: String,
  departureTime: String,
  arrivalTime: String,
  price: Number,
  isAC: Boolean,
  seatType: String,
  seats: [seatSchema]
}, { timestamps: true });

module.exports = mongoose.model('Bus', busSchema);