export const stationAnalytics = {

  getfirstCode(station) {
    if (station.reports.length > 0) {
        // Get the first report
        const firstReport = station.reports[0];
        // Return the weather code from the first report
        return firstReport.code;
    }
    // Return null if there are no reports
    return null;
},

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

  getWindDirection(station) {
    if (station.reports.length > 0) {
      return station.reports[0].windDirection;
    }
    return null;  
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
