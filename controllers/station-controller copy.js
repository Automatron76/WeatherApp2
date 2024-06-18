import { stationStore } from "../models/station-store.js";

export const dashboardController = {
  async index(request, response) {
    const viewData = {
      title: "Weather Dashboard",
      stations: await stationStore.getAllStations(),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
async addStation(request, response) {
  const newStation = {
    title: request.body.title,
  };
  console.log(`adding weatther station ${newStation.title}`);
  await stationStore.addStation(newStation);
  response.redirect("/dashboard");
},
};
