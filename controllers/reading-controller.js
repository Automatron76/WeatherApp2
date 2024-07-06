import axios from "axios";
import { stationStore } from "../models/station-store.js";






export const readingController = {
async index(request, response) {

      const station = await stationStore.getStationById(request.params.id); //this gets the station id
     // const lat = station.latitude;
     // const long = station.longitude;
      const title = station.title;

      const weatherRequestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=55f42099079e1f2b191983b4311a383a`
      
      const apiResponse = await axios.get(weatherRequestUrl);
      const weatherData = apiResponse.data;

      if (!weatherData.main) {
        console.error("API response does not contain 'main' data:", weatherData);
        return response.status(500).send("Error: Unexpected API response format.");
      }

        const viewData = {
          title: "Auto Report",
          weather: {
            stationName: weatherData.name,
            temp: (weatherData.main.temp - 273.15).toFixed(2), // Convert Kelvin to Celsius
            feelsLike: (weatherData.main.feels_like - 273.15).toFixed(2), // Convert Kelvin to Celsius
            tempMin: (weatherData.main.temp_min - 273.15).toFixed(2), // Convert Kelvin to Celsius
            tempMax: (weatherData.main.temp_max - 273.15).toFixed(2), // Convert Kelvin to Celsius
            pressure: weatherData.main.pressure,
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.wind.speed,
            windDegree: weatherData.wind.deg,
            description: weatherData.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
          }
        };

        response.render("autoreport-view", viewData);
      }
      };
  