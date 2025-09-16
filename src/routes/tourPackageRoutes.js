import express from "express";
import { getAllPackages, getPackagesByCityOrDuration, createPackage } from "../controllers/tourPackageController.js";
const router = express.Router();

router.get("/", getAllPackages);
router.get("/filter", getPackagesByCityOrDuration); // /api/packages/filter?city=Ranchi&hours=6
router.post("/", createPackage);

export default router;
