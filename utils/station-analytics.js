export const stationAnalytics = {

  getMinTempReport(station) {
    let minTempReport = null;
    if (station.reports.length > 0) {
      minTempReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].temp < minTempReport.temp) {
          minTempReport = station.reports[i];
        }
      }
    }
    return minTempReport;
  },
  
  getMaxTempReport(station) {
    let maxTempReport = null;
    if (station.reports.length > 0) {
      maxTempReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].temp > maxTempReport.temp) {
          maxTempReport = station.reports[i];
        }
      }
    }
    return maxTempReport;
  },

  getminWindSpeedReport(station) {
    let minWindSpeedReport = null;
    if (station.reports.length > 0) {
        minWindSpeedReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].windSpeed < minWindSpeedReport.windSpeed) {
            minWindSpeedReport = station.reports[i];
        }
      }
    }
    return minWindSpeedReport;
  },

  getmaxWindSpeedReport(station) {
    let maxWindSpeedReport = null;
    if (station.reports.length > 0) {
        maxWindSpeedReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].windSpeed > maxWindSpeedReport.windSpeed) {
            maxWindSpeedReport = station.reports[i];
        }
      }
    }
    return maxWindSpeedReport;
  },

  getminPressureReport(station) {
    let minPressureReport = null;
    if (station.reports.length > 0) {
        minPressureReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].pressure < minPressureReport.pressure) {
            minPressureReport = station.reports[i];
        }
      }
    }
    return minPressureReport;
  },

  getmaxPressureReport(station) {
    let maxPressureReport = null;
    if (station.reports.length > 0) {
        maxPressureReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].pressure > maxPressureReport.pressure) {
            maxPressureReport = station.reports[i];
        }
      }
    }
    return maxPressureReport;
  },
  
  
};
