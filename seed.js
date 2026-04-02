require('dotenv').config();
const mongoose = require('mongoose');
const Bus = require('./src/models/bus.model');
const generateSeats = require('./src/utils/generateSeats');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ✅");

    // पुराना data delete
    await Bus.deleteMany();

    const buses = [
      {
        name: "Express 1",
        departureCity: "Delhi",
        arrivalCity: "Jaipur",
        departureTime: "09:00 AM",
        arrivalTime: "02:00 PM",
        price: 500,
        isAC: true,
        seatType: "sleeper",
        seats: generateSeats(40)
      },
      {
        name: "Volvo AC",
        departureCity: "Delhi",
        arrivalCity: "Agra",
        departureTime: "08:00 AM",
        arrivalTime: "12:00 PM",
        price: 700,
        isAC: true,
        seatType: "semi-sleeper",
        seats: generateSeats(40)
      },
      {
        name: "Non AC Deluxe",
        departureCity: "Delhi",
        arrivalCity: "Lucknow",
        departureTime: "10:00 PM",
        arrivalTime: "06:00 AM",
        price: 400,
        isAC: false,
        seatType: "normal",
        seats: generateSeats(40)
      }
    ];

    await Bus.insertMany(buses);

    console.log("Data inserted successfully 🚀");
    process.exit();

  } catch (error) {
    console.log("Error ❌", error);
  }
};

seedData();