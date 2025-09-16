// backend/src/models/Festival.js
import mongoose from "mongoose";

const FestivalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },        // use Date for sorting/calendar
  description: { type: String },
  image: { type: String },
  location: { type: String },
  type: { type: String } // e.g., "Tribal", "Harvest", "Religious"
}, { timestamps: true });

export default mongoose.model("Festival", FestivalSchema);
