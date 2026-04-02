const Bus = require("../models/bus.model");

const getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
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