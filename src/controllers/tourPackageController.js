import TourPackage from "../models/TourPackage.js";

export const getAllPackages = async (req, res) => {
  try {
    const pkgs = await TourPackage.find().populate("spots");
    res.json(pkgs);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const getPackagesByCityOrDuration = async (req, res) => {
  try {
    const { city, hours } = req.query;
    const filter = {};
    if (city) filter.city = new RegExp(`^${city}$`, "i");
    if (hours) filter.durationHours = { $lte: Number(hours) };
    const pkgs = await TourPackage.find(filter).populate("spots");
    res.json(pkgs);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

export const createPackage = async (req, res) => {
  try {
    const pkg = new TourPackage(req.body);
    await pkg.save();
    res.status(201).json(pkg);
  } catch (err) { res.status(400).json({ message: err.message }); }
};
