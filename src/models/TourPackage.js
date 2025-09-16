import mongoose from "mongoose";

const tourPackageSchema = new mongoose.Schema({
  name: { type: String, required: true },         // e.g. "Ranchi 1-Day Tour"
  description: { type: String },
  spots: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Spot",       // Linking with Spot.js
    }
  ],
  duration: { type: Number, required: true },     // in hours (like 8h package)
  price: { type: Number },                        // optional (future scope)
  image: { type: String },                        // cover image
  tags: [String],                                 // ["eco", "cultural"]
}, { timestamps: true });

export default mongoose.model("TourPackage", tourPackageSchema);
