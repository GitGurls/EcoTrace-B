// backend/src/routes/festivalRoutes.js
import express from "express";
import {
  getFestivals,
  getFestivalById,
  createFestival,
  updateFestival,
  deleteFestival
} from "../controllers/festivalController.js";

// If you have admin middleware, import and use it here; otherwise keep POST unprotected for MVP
// import { verifyAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getFestivals);
router.get("/:id", getFestivalById);
// For MVP you can allow POST (admin UI will be protected by token later)
router.post("/", /*verifyAdmin,*/ createFestival);
router.put("/:id", /*verifyAdmin,*/ updateFestival);
router.delete("/:id", /*verifyAdmin,*/ deleteFestival);

export default router;
