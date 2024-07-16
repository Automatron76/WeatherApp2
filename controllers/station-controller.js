import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import dayjs from "dayjs";  // Import dayjs
import { weatherUtils } from "../utils/weatherUtils.js";

export const stationController = {
  
  async index(request, response) {
    

    const station = await stationStore.getStationById(request.params.id); //this gets the station id

    station.reports.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime)); // Sort reports by dateTime in descending order

    const firstCode = stationAnalytics.getfirstCode(station.reports);   //this should get the weather code of object at index 0

    const minTemp = stationAnalytics.getMinTempReport(station.reports);
    const maxTemp = stationAnalytics.getMaxTempReport(station.reports);

    const windDirection = stationAnalytics.getWindDirection(station.reports);
    const minWindSpeed = stationAnalytics.getminWindSpeedReport(station.reports);
    const maxWindSpeed = stationAnalytics.getmaxWindSpeedReport(station.reports);
    
    const minPressure = stationAnalytics.getminPressureReport(station.reports);
    const maxPressure = stationAnalytics.getmaxPressureReport(station.reports);

    const{ description, icon }  = weatherUtils.getWeatherDescription(firstCode);

    console.log(minTemp,maxTemp,minPressure,maxPressure,minWindSpeed,maxWindSpeed)  //to check if I am getting values or not 

    const viewData = {
      title: "Station",
      code: firstCode,
      station: station,
      icon: icon,
      description: description,

      minTemp: minTemp,
      maxTemp: maxTemp,

      windDirection: windDirection,
      minWindSpeed: minWindSpeed,
      maxWindSpeed: maxWindSpeed,

      minPressure: minPressure,
      maxPressure: maxPressure,

      stationName: station.title,
      stationLatitude: station.latitude,
      stationLongitude: station.longitude,
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
      pressure: Number(request.body.pressure),
      dateTime: dayjs().format("YYYY-MM-DD HH:mm:ss")  // Add the current date and time
    };

    const addedReport = await reportStore.addReport(station._id, newReport);

    console.log(`adding report ${addedReport._id}`);
    
    response.redirect("/station/" + station._id);
  },

  async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(reportId);
    response.redirect("/station/" + stationId);
  },

  
};
