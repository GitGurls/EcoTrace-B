// import express from "express";
// import { getSpots, getSpotById } from "../controllers/spotController.js";

// const router = express.Router();

// router.get("/", getSpots);          // GET /api/spots
// router.get("/:id", getSpotById);    // GET /api/spots/:id

// export default router;



import express from "express";
import { getSpots, getSpotById } from "../controllers/spotController.js";

const router = express.Router();

router.get("/", getSpots);
router.get("/:id", getSpotById);

export default router;
