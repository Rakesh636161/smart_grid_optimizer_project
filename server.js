require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;
const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

function calculateSolarPower(cloudsPercent, temp, isDaytime) {
  if (!isDaytime) return 0; // Strictly 0W at night
  const maxSolar = 2500;
  const cloudFactor = Math.max(0.05, 1.0 - (cloudsPercent / 100) * 0.9);
  const tempFactor = temp > 25 ? Math.max(0.7, 1.0 - ((temp - 25) * 0.004)) : 1.0;
  return Math.round(maxSolar * cloudFactor * tempFactor);
}

function calculateWindPower(windSpeed) {
  if (windSpeed < 2) return 0;
  const maxWind = 2000;
  const windPowerRaw = 15 * Math.pow(windSpeed, 2.2);
  return Math.min(maxWind, Math.round(windPowerRaw));
}

async function getWeatherData(query) {
  const cleanQuery = query.trim();
  try {
    // Step 1: Get exact coordinates for the typed city/area name
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cleanQuery)}&limit=1&appid=${OPENWEATHER_API_KEY}`;
    const geoResponse = await axios.get(geoUrl);

    if (!geoResponse.data || geoResponse.data.length === 0) {
      return { success: false, error: 'Area or city not found. Please verify the spelling.' };
    }

    const location = geoResponse.data[0];
    const lat = location.lat;
    const lon = location.lon;
    const resolvedName = location.name;
    const country = location.country || 'IN';

    // Step 2: Fetch precise weather data using those exact coordinates
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;
    const weatherResponse = await axios.get(weatherUrl);
    
    const data = weatherResponse.data;
    const temp = data.main.temp;
    const weatherDesc = data.weather[0].description;
    const clouds = data.clouds.all;
    const exactWindSpeed = parseFloat(data.wind.speed.toFixed(2)); // m/s directly from weather station

    // Step 3: Determine local daytime status via timezone offset
    const timezoneOffsetSeconds = data.timezone; 
    const localUtcTimestamp = Date.now() + (timezoneOffsetSeconds * 1000);
    const localDate = new Date(localUtcTimestamp);
    const localHour = localDate.getUTCHours();
    const isDaytime = localHour >= 6 && localHour < 18;

    const solarPower = calculateSolarPower(clouds, temp, isDaytime);
    const windPower = calculateWindPower(exactWindSpeed);

    return {
      success: true,
      city: resolvedName,
      country: country,
      temperature: Math.round(temp),
      description: weatherDesc,
      clouds: clouds,
      windSpeed: exactWindSpeed,
      isDaytime: isDaytime,
      solarPower: solarPower,
      windPower: windPower
    };
  } catch (error) {
    console.error('Weather API error:', error.message);
    return { success: false, error: 'Failed to fetch accurate weather data for this location.' };
  }
}

app.get('/api/weather', async (req, res) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ success: false, error: 'City query parameter required.' });
  }
  const result = await getWeatherData(city);
  res.json(result);
});

const startServer = () => {
  const server = app.listen(PORT, () => {
    console.log(`🚀 Smart Grid Optimizer backend successfully running at http://localhost:${PORT}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`[!] Port ${PORT} is busy. Automatically freeing port...`);
      exec(`npx kill-port ${PORT}`, (err) => {
        if (!err) {
          setTimeout(startServer, 1000);
        }
      });
    }
  });
};

startServer();