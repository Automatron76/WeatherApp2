
import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";


import { userStore } from "../models/user-store.js"; 


export const dashboardController = {

  async index(request, response) {

    
    const loggedInUser = await accountsController.getLoggedInUser(request);// Verify logged-in user and fetch user details
    const user = await userStore.getUserById(loggedInUser._id); // Fetch user details

    const stations = await stationStore.getStationsByUserId(loggedInUser._id)
    stations.sort((a, b) => a.title.localeCompare(b.title));  //sort stations in alphabetical order

     // Loop through each station to fetch and analyze its reports
     for (const station of stations) {
      const reports = await reportStore.getReportsByStationId(station._id);

      if (reports.length > 0) {
        station.minTemp = stationAnalytics.getMinTempReport(reports);
        station.maxTemp = stationAnalytics.getMaxTempReport(reports);
        station.windDirection = stationAnalytics.getWindDirection(reports);
        station.minWindSpeed = stationAnalytics.getminWindSpeedReport(reports);
        station.maxWindSpeed = stationAnalytics.getmaxWindSpeedReport(reports);
        station.minPressure = stationAnalytics.getminPressureReport(reports);
        station.maxPressure = stationAnalytics.getmaxPressureReport(reports);
      }else {
        station.minTemp = null;
        station.maxTemp = null;
        station.windDirection = null;
        station.minWindSpeed = null;
        station.maxWindSpeed = null;
        station.minPressure = null;
        station.maxPressure = null;
      }
    }

//    console.log(minTemps, maxTemps, minPressures, maxPressures, windDirections, minWindSpeeds, maxWindSpeeds);

    const viewData = {
      title: "Station Dashboard",
      user: user, // Pass user object to the view
      stations: stations
    };
    
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
async addStation(request, response) {
  const loggedInUser =await accountsController.getLoggedInUser(request);
  const newStation = {
    title: request.body.title,
    latitude:  Number(request.body.lat),  
    longitude:  Number(request.body.lng),
     
    userid: loggedInUser._id,
  };
  console.log(`adding weather station ${newStation.title} `);
  await stationStore.addStation(newStation);
  response.redirect("/dashboard");
},


async deleteStation(request,response) {
  const stationId = request.params.id;
  console.log(`Deleting Station ${stationId}`);
  await stationStore.deleteStationById(stationId);
  response.redirect("/dashboard");
}

}

