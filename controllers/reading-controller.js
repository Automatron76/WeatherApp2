import axios from "axios";
import { stationStore } from "../models/station-store.js";
import dayjs from "dayjs";  // Import dayjs

export const readingController = {
async index(request, response) {

      const station = await stationStore.getStationById(request.params.id); //this gets the station id
      const lat = station.latitude;
      const lon = station.longitude;
      const title = station.title;

      const weatherRequestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${title}&appid=55f42099079e1f2b191983b4311a383a`
      const forecastRequestUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&exclude=daily,minutely,current,alerts&units=metric&appid=55f42099079e1f2b191983b4311a383a`
      const apiResponse = await axios.get(weatherRequestUrl);
      const forecastResponse = await axios.get(forecastRequestUrl);

      const dateTime = dayjs().format("dddd, MMM D, YYYY h:mm A")

      const weatherData = apiResponse.data;
      const forecastData = forecastResponse.data;
      if (!weatherData.main || !forecastData.list ) {
        console.error("API response does not contain 'main' data:", weatherData, forecastData);
        return response.status(500).send("Error: Unexpected API response format.");
      }

       // Extract temperature values from the forecast data
       const temperatures = forecastData.list.map(item => parseFloat((item.main.temp))); 
           // Log the extracted temperatures for debugging
      console.log(lat, lon, station);

        const viewData = {
          title: "Auto Report",
          weather: {
            dateTime: dateTime,  
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
            icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`,
          },
          chartData: {
          temperatures:temperatures
        }
       

        };

        response.render("autoreport-view", viewData);
      }
      };
  