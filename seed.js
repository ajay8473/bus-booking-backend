require("dotenv").config();
const mongoose = require("mongoose");
const Bus = require("./src/models/bus.model");

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected ✅");
};

const generateSeats = () => {
  const seats = [];
  let count = 1;

  for (let row = 1; row <= 10; row++) {
    for (let col = 1; col <= 4; col++) {
      seats.push({
        seatNumber: count++,
        isAvailable: true,
        row,
        column: col,
        seatType: "normal",
      });
    }
  }

  return seats;
};

const seedData = async () => {
  try {
    await connectDB();

    await Bus.deleteMany();

    await Bus.insertMany([
      {
        name: "Volvo AC",
        departureCity: "Delhi",
        arrivalCity: "Agra",
        departureTime: "08:00 AM",
        arrivalTime: "12:00 PM",
        price: 700,
        isAC: true,
        seats: generateSeats(),
      },
      {
        name: "Sleeper Bus",
        departureCity: "Delhi",
        arrivalCity: "Jaipur",
        departureTime: "09:00 PM",
        arrivalTime: "05:00 AM",
        price: 1200,
        isAC: false,
        seats: generateSeats(),
      }
    ]);

    console.log("Data inserted successfully 🚀");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedData();