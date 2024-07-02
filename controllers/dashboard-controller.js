
import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";
import axios from "axios";
import { stationAnalytics } from "../utils/station-analytics.js";
import { userStore } from "../models/user-store.js";  // Aggiungi questa riga

const weatherRequestUrl = `http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={long}&appid=55f42099079e1f2b191983b4311a383a`

export const dashboardController = {

  async index(request, response) {

    
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const user = await userStore.getUserById(loggedInUser._id); // Fetch user details
    const stations = await stationStore.getStationsByUserId(loggedInUser._id)
    stations.sort((a, b) => a.title.localeCompare(b.title));

    const viewData = {
      title: "Station Dashboard",
      user: user, // Pass user object to the view
      stations : stations,
     
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

