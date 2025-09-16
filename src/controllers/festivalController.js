// backend/src/controllers/festivalController.js
import Festival from "../models/Festival.js";

export const getFestivals = async (req, res) => {
  try {
    const { type, location } = req.query;
    const filter = {};
    if (type) filter.type = type;
    if (location) filter.location = { $regex: location, $options: "i" };

    const festivals = await Festival.find(filter).sort({ date: 1 });
    res.json(festivals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching festivals", error: err.message });
  }
};

export const getFestivalById = async (req, res) => {
  try {
    const fest = await Festival.findById(req.params.id);
    if (!fest) return res.status(404).json({ message: "Festival not found" });
    res.json(fest);
  } catch (err) {
    res.status(500).json({ message: "Error fetching festival", error: err.message });
  }
};

// ✅ Admin new festival create
export const createFestival = async (req, res) => {
  try {
    // req.body se frontend ya Postman se data aayega
    const festival = new Festival(req.body);

    // MongoDB me save karo
    await festival.save();

    // Response bhej do
    res.status(201).json(festival);
  } catch (error) {
    res.status(500).json({ message: "Error creating festival", error: error.message });
  }
};

export const updateFestival = async (req, res) => {
  try {
    const festival = await Festival.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!festival) return res.status(404).json({ message: "Festival not found" });
    res.json(festival);
  } catch (err) {
    res.status(400).json({ message: "Error updating festival", error: err.message });
  }
};

export const deleteFestival = async (req, res) => {
  try {
    const festival = await Festival.findByIdAndDelete(req.params.id);
    if (!festival) return res.status(404).json({ message: "Festival not found" });
    res.json({ message: "Festival deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting festival", error: err.message });
  }
};
