const Bus = require("../models/bus.model");

const getBuses = async (req, res) => {
  try {
    const { departureCity, arrivalCity } = req.query;

    let filter = {};

    // 🔥 safe filter
    if (departureCity) {
      filter.departureCity = new RegExp(departureCity, "i");
    }

    if (arrivalCity) {
      filter.arrivalCity = new RegExp(arrivalCity, "i");
    }

    const buses = await Bus.find(filter);

    res.json(buses);
  } catch (error) {
    console.error("ERROR:", error); // 🔥 important
    res.status(500).json({ error: error.message });
  }
};

const getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    res.json(bus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getBuses,
  getBusById,
};