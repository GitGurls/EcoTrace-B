// import express from "express";
// import { addFeedback, getFeedbacks } from "../controllers/feedbackController.js";

// const router = express.Router();

// router.post("/", addFeedback);   // POST /api/feedback
// router.get("/", getFeedbacks);   // GET /api/feedback (admin only)

// export default router;

import express from "express";
import { addFeedback, getFeedbacks } from "../controllers/feedbackController.js";

const router = express.Router();

router.post("/", addFeedback);   // POST /api/feedback
router.get("/", getFeedbacks);   // GET /api/feedback

export default router;

