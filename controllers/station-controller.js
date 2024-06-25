import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";

export const stationController = {
  
  async index(request, response) {
    
    const station = await stationStore.getStationById(request.params.id);
    
    const minTemp = stationAnalytics.getMinTempReport(station);
    const maxTemp = stationAnalytics.getMaxTempReport(station);

    const minWindSpeed = stationAnalytics.getminWindSpeedReport(station);
    const maxWindSpeed = stationAnalytics.getmaxWindSpeedReport(station);
    
    const minPressure = stationAnalytics.getminPressureReport(station);
    const maxPressure = stationAnalytics.getmaxPressureReport(station);

    const viewData = {
      title: "Station",
      station: station,
      minTemp: minTemp,
      maxTemp: maxTemp,
      minWindSpeed: minWindSpeed,
      maxWindSpeed: maxWindSpeed,
      minPressure: minPressure,
      maxPressure: maxPressure
    };
    response.render("station-view", viewData);
  },

  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReport = {
      code: Number(request.body.code),
      temp: Number(request.body.temp),
      windSpeed: Number(request.body.windSpeed),
      windDirection: request.body.windDirection,
      pressure: Number(request.body.pressure)
    };
    console.log(`adding report ${newReport.title}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  }
};
