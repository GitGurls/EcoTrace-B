import express from "express";
import { getLatestReviews } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/latest", getLatestReviews);   // GET /api/reviews/latest

export default router;
