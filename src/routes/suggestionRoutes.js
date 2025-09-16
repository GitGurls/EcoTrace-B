import express from "express";
import { getSuggestions } from "../controllers/suggestionController.js";
const router = express.Router();

// GET /api/suggestions?city=Ranchi&availableHours=4&interest=Eco
router.get("/", getSuggestions);

export default router;
