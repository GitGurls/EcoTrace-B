
// import mongoose from "mongoose";

// const spotSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   location: { type: String, required: true },
//   description: { type: String, required: true },
//   image: { type: String, required: true },
//   category: {
//     type: String,
//     enum: ["Cultural", "Eco", "Heritage", "Adventure", "Other"], 
//     default: "Other",
//   },
// });

// export default mongoose.model("Spot", spotSchema);


import mongoose from "mongoose";

const spotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },        // e.g., Ranchi, Deoghar
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: {
    type: String,
    enum: ["Cultural", "Eco", "Heritage", "Adventure", "Religious", "Other"], 
    default: "Other",
  },
  nearestCity: { type: String },          // eg: Ranchi, Deoghar
  travelTimeFromCity: { type: Number },   // minutes from nearest city
  recommendedDuration: { type: Number },  // in hours (e.g., 2.5 means 2h30m)
  lat: Number,                            // optional (map use later)
  lng: Number,                            // optional
  tags: [String]                          // keywords like ["waterfall","trek"]
}, { timestamps: true });

export default mongoose.model("Spot", spotSchema);

