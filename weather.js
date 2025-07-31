const apiKey = `f560f687175d0e6ce42ab6928cbcc150`;

async function fetchWeather(city) {

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  if (!response.ok) {
    throw new Error(`Error fetching weather data: ${response.statusText}`);
  }
  const data = await response.json();
  console.log(data.main.temp);
}

fetchWeather('London');


const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('getWeatherBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
let city;

function getCity() {
  city = cityInput.value;
}