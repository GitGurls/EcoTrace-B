import Feedback from "../models/Feedback.js ";

// Add new feedback
export const addFeedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newFeedback = new Feedback({ name, email, message });
    await newFeedback.save();

    res.status(201).json({ message: "Feedback submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding feedback", error });
  }
};

// Get all feedbacks
export const getFeedbacks = async (_req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
};
