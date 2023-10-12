<template>
    <div>
      <h2>Weather for Predefined Cities</h2>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Weather Conditions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cityData, cityName) in predefinedCitiesWeather" :key="cityName">
            <td>{{ cityName }}</td>
            <td>{{ cityData.main.temp }}°C</td>
            <td>{{ cityData.weather[0].description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        predefinedCitiesWeather: {}, // Store weather data for predefined cities
      };
    },
    created() {
      // Fetch weather data for predefined cities when the component is created
      this.fetchPredefinedCitiesWeather();
    },
    methods: {
      async fetchPredefinedCitiesWeather() {
        const apiKey = '0f8c25e74af601399deba97048c11377'; // Your OpenWeatherMap API key
        const cities = ['Melbourne', 'Sydney', 'Adelaide', 'Brisbane', 'Perth'];
  
        for (const city of cities) {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            this.predefinedCitiesWeather[city] = response.data;
          } catch (error) {
            console.error(`Failed to fetch weather data for ${city}:`, error);
          }
        }
      },
    },
  };
  </script>

<style>
@import '@/assets/WeatherTable.css';
</style>