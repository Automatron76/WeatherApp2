export const stationAnalytics = {

  getfirstCode(reports) {
    if (reports.length > 0) {
      const firstReport = reports[0]; // Get the first report object
      return firstReport.code; // Return the weather code from the first report object
    }
    // Return null if there are no reports
    return null;
  },

  getMinTempReport(reports) {
    if (reports && reports.length > 0) {
      let minTemp = reports[0].temp;
      for (let i = 1; i < reports.length; i++) {
        if (reports[i].temp < minTemp) {
          minTemp = reports[i].temp;
        }
      }
      return minTemp;
    }
    return null;
  },

  getMaxTempReport(reports) {
    if (reports && reports.length > 0) {
      let maxTemp = reports[0].temp;
      for (let i = 1; i < reports.length; i++) {
        if (reports[i].temp > maxTemp) {
          maxTemp = reports[i].temp;
        }
      }
      return maxTemp;
    }
    return null;
  },

  getWindDirection(reports) {
    if (reports && reports.length > 0) {
      return reports[0].windDirection;
    }
    return null;
  },

  getminWindSpeedReport(reports) {
    if (reports && reports.length > 0) {
      let minWindSpeed = reports[0].windSpeed;
      for (let i = 1; i < reports.length; i++) {
        if (reports[i].windSpeed < minWindSpeed) {
          minWindSpeed = reports[i].windSpeed;
        }
      }
      return minWindSpeed;
    }
    return null;
  },

  getmaxWindSpeedReport(reports) {
    if (reports && reports.length > 0) {
      let maxWindSpeed = reports[0].windSpeed;
      for (let i = 1; i < reports.length; i++) {
        if (reports[i].windSpeed > maxWindSpeed) {
          maxWindSpeed = reports[i].windSpeed;
        }
      }
      return maxWindSpeed;
    }
    return null;
  },

  getminPressureReport(reports) {
    if (reports && reports.length > 0) {
      let minPressure = reports[0].pressure;
      for (let i = 1; i < reports.length; i++) {
        if (reports[i].pressure < minPressure) {
          minPressure = reports[i].pressure;
        }
      }
      return minPressure;
    }
    return null;
  },

  getmaxPressureReport(reports) {
    if (reports && reports.length > 0) {
      let maxPressure = reports[0].pressure;
      for (let i = 1; i < reports.length; i++) {
        if (reports[i].pressure > maxPressure) {
          maxPressure = reports[i].pressure;
        }
      }
      return maxPressure;
    }
    return null;
  },
};
