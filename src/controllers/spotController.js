import Spot from "../models/Spot.js ";

// get all spots
export const getSpots = async (req, res) => {
  try {
    const spots = await Spot.find();
    res.json(spots);
  } catch (error) {
    res.status(500).json({ message: "Error fetching spots", error });
  }
};

// get single spot by id
export const getSpotById = async (req, res) => {
  try {
    const spot = await Spot.findById(req.params.id);
    if (!spot) return res.status(404).json({ message: "Spot not found" });
    res.json(spot);
  } catch (error) {
    res.status(500).json({ message: "Error fetching spot", error });
  }
};
