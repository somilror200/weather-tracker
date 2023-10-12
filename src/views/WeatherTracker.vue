<template>
    <div>
      <h1>Weather Tracker</h1>
  
      <input type="text" v-model="city" placeholder="Enter a city">
      <button @click="fetchWeather" :disabled="isLoading">Fetch Weather</button>
      <button @click="clearData">Clear</button>

      
      <div v-if="weatherData">
        <h2>{{ weatherData.name }}</h2>
        <p>Current temperature: {{ weatherData.main.temp }}{{ temperatureUnit }}</p>
        <p>Weather conditions: {{ weatherData.weather[0].description }}</p>
      </div>
  
      <div v-else-if="isLoading">
        Loading...
      </div>
  
      <div v-if="error">
        {{ error }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'WeatherTracker',
    data() {
      return {
        city: '',
        weatherData: null,
        isLoading: false,
        error: '',
        temperatureUnit: '°C',
      };
    },
    methods: {
      async fetchWeather() {
        this.isLoading = true;
        this.error = '';
  
        try {
          const apiKey = '0f8c25e74af601399deba97048c11377'; // Your OpenWeatherMap API key
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`);
          this.weatherData = response.data;
        } catch (error) {
          console.error(error);
          this.error = 'City not found. Please check the city name and try again.';
        }
  
        this.isLoading = false;
      },
  
      clearData() {
        this.city = '';
        this.weatherData = null;
        this.error = '';
      },
    },
  };
  </script>

<style>
@import '@/assets/WeatherTracker.css';
</style>