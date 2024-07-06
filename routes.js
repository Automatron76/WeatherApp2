import express from "express";

import { accountsController } from './controllers/accounts-controller.js';
import { dashboardController } from "./controllers/dashboard-controller.js";
import { stationController } from "./controllers/station-controller.js";
import { aboutController } from "./controllers/about-controller.js"; 
import { readingController } from "./controllers/reading-controller.js"

import { reportController } from "./controllers/report-controller.js";
import { editUserController } from "./controllers/editUser-controller.js";

export const router = express.Router();

router.get("/", accountsController.index);

router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);

router.get("/dashboard", dashboardController.index);
router.post("/dashboard/addstation", dashboardController.addStation);   //route to add a station 
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation); //route to delete a station 
router.get("/edit/:id", editUserController.index)   //route to edit user info
router.post("/edit/:id", editUserController.editUser);  //route to post user info 


router.get("/station/:id", stationController.index); 
router.post("/station/:id/addreport", stationController.addReport);  //route to add a report inside a station
router.get("/station/:stationid/deletereport/:reportid", stationController.deleteReport); //route to delete a report inside a station

router.get("/station/:stationid/editreport/:reportid", reportController.index);  //route to edit a report
router.post("/station/:stationid/updatereport/:reportid", reportController.update); //route to update a report

router.get("/autoreport-view/:id",readingController.index) //route to the auto report 

router.get("/about", aboutController.index);


