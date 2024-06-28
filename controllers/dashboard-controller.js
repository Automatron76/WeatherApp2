
import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";
import axios from "axios";

const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&appid=085fdcfb805ee6e4f4e5faf7214d6ba8;`

export const dashboardController = {

  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);

    let stations = await stationStore.getStationsByUserId(loggedInUser._id);

    stations = stations.sort((a, b) => a.title.localeCompare(b.title));
    const viewData = {
      title: "Station Dashboard",
      station: await stationStore.getStationsByUserId(loggedInUser._id),
      stations: await stationStore.getAllStations(),
     
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
async addStation(request, response) {
  const loggedInUser =await accountsController.getLoggedInUser(request);
  const newStation = {
    title: request.body.title,
    latitude: request.body.latitude,  
    longitude: request.body.longitude, 
    userid: loggedInUser._id,
  };
  console.log(`adding weather station ${newStation.title}`);
  await stationStore.addStation(newStation);
  response.redirect("/dashboard");
},
async deleteStation(request,response) {
  const stationId = request.params.id;
  console.log(`Deleting Station ${stationId}`);
  await stationStore.deleteStationById(stationId);
  response.redirect("/dashboard");
},

async editUser(request, response) {
  const userid = request.params._id;

  const updatedUser = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password,
  };

    console.log(`Updating User ${userid}`);
    const update = await reportStore.getUserById(reportId);
    await getAllUsers.updateUser(update,updatedUser );
    response.redirect("/dashboard/" )
  
  },

  
}

