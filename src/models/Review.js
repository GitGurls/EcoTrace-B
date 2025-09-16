import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: String,
  spot: String,
  rating: Number,
  comment: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Review", reviewSchema);
