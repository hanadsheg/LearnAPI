const apiKey = `f560f687175d0e6ce42ab6928cbcc150`;

const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('getWeatherBtn');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherCondition = document.getElementById('weatherCondition');
const weatherResult = document.getElementById('weatherResult');

let city;

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    getCity();
  }
});




async function fetchData(city) {
  try{
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) {
          throw new Error(`Error fetching weather data: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      showInfo(data);

  } catch (error) {
      console.error(error);
  }
  
  

}



function getCity() {
  city = cityInput.value.toLowerCase().trim();
  cityInput.value = '';
  fetchData(city);
}

function showInfo(data){

  const {name: city, main: {temp: temp}, weather: [{description: condition}]} = data;

  weatherResult.style.display = 'block';
  cityName.textContent = city;
  temperature.textContent = `${temp} °C`;
  weatherCondition.textContent = condition;
}

