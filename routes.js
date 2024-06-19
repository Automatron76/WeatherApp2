import express from "express";
import { stationController } from "./controllers/station-controller.js";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
export const router = express.Router();

router.get("/", dashboardController.index);
router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addreport", stationController.addReport);
router.get("/about", aboutController.index);