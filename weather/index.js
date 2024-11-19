const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-image');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');

const API_KEY = 'c4520f66c6ee7f637e6a92b5a865f807';
const API_URL = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

async function checkWeather(city) {
  try {
    console.log(`Fetching weather data for: ${city}`);
    const response = await fetch(API_URL(city));
    const weatherData = await response.json();

    if (weatherData.cod === '404') {
      alert('City not found');
      return;
    }

    console.log('Weather data:', weatherData);

    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
    description.innerHTML = weatherData.weather[0].description;
    humidity.innerHTML = `${weatherData.main.humidity}%`;
    wind.innerHTML = `${weatherData.wind.speed} km/h`;

    /*let imgSrc;
    switch (weatherData.weather[0].main) {
      case 'Clouds':
        imgSrc = "/images/cloud.png";
        break;
      case 'Clear':
        imgSrc = "/images/clear.png";
        break;
      case 'Mist':
        imgSrc = "/images/mist.png";
        break;
      case 'Snow':
        imgSrc = "/images/snow.png";
        break;
      default:
        imgSrc = "/images/default.png";
    }*/

    weatherImg.src = imgSrc;
    console.log('Updated image source to: ${imgSrc}');
  }
  catch (error) {
    console.error('Error fetching the weather data:', error);
  }
}

searchBtn.addEventListener('click', () => {
  const city = inputBox.value.trim();
  if (city) {
    checkWeather(city);
  } else {
    console.log('Please enter a city name');
  }
});
