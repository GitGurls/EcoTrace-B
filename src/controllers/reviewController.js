import Review from "../models/Review.js ";

// 📌 POST - add a new review
export const createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review submitted successfully", review });
  } catch (err) {
    res.status(400).json({ error: "Failed to submit review", details: err.message });
  }
};

// 📌 GET - get all reviews
export const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // latest first
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews", details: err.message });
  }
};

// 📌 GET - get reviews for a specific spot
export const getReviewsBySpot = async (req, res) => {
  try {
    const { spotId } = req.params;
    const reviews = await Review.find({ spot: spotId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch reviews for this spot", details: err.message });
  }
};

// 📌 DELETE - delete a review by id
export const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Review.findByIdAndDelete(id);
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete review", details: err.message });
  }
};

// 📌 GET - get latest 5 reviews
export const getLatestReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }).limit(5); // latest 5
    res.json(reviews);
  } catch (err) {
    res.status(500).json({
      error: "Failed to fetch latest reviews",
      details: err.message,
    });
  }
};

