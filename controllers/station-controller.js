import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";

export const stationController = {
  
  async index(request, response) {
    
    const station = await stationStore.getStationById(request.params.id);
    
    
let minTempReport = null;
let maxTempReport = null;
let minWindSpeedReport = null;
let maxWindSpeedReport = null;
let minPressureReport = null;
let maxPressureReport = null;

if (station.reports.length > 0) {
    minTempReport = station.reports[0];
    maxTempReport = station.reports[0];
    minWindSpeedReport = station.reports[0];
    maxWindSpeedReport = station.reports[0];
    minPressureReport = station.reports[0];
    maxPressureReport = station.reports[0];

    for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].temp < minTempReport.temp) {
            minTempReport = station.reports[i];
        }
        if (station.reports[i].temp > maxTempReport.temp) {
            maxTempReport = station.reports[i];
        }
        if (station.reports[i].windSpeed < minWindSpeedReport.windSpeed) {
            minWindSpeedReport = station.reports[i];
        }
        if (station.reports[i].windSpeed > maxWindSpeedReport.windSpeed) {
            maxWindSpeedReport = station.reports[i];
        }
        if (station.reports[i].pressure < minPressureReport.pressure) {
            minPressureReport = station.reports[i];
        }
        if (station.reports[i].pressure > maxPressureReport.pressure) {
            maxPressureReport = station.reports[i];
        }
    }
}

console.log({
    minTemp: minTempReport.temp,
    maxTemp: maxTempReport.temp,
    minWindSpeed: minWindSpeedReport.windSpeed,
    maxWindSpeed: maxWindSpeedReport.windSpeed,
    minPressure: minPressureReport.pressure,
    maxPressure: maxPressureReport.pressure
});

 

    const viewData = {
      title: "Station",
      station: station,
      minTemp: minTempReport.temp,
      maxTemp: maxTempReport.temp,
      minWindSpeed: minWindSpeedReport.windSpeed,
      maxWindSpeed: maxWindSpeedReport.windSpeed,
      minPressure: minPressureReport.pressure,
      maxPressure: maxPressureReport.pressure
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
