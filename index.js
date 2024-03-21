function refreshWeather(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.main.temp;
  let humidity = document.querySelector(".humidity");
  let speed = document.querySelector(".speed");
  let description = document.querySelector("#description");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.dt * 1000);
  let iconCode = response.data.weather[0].icon;
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp) + "°c";
  humidity.innerHTML = response.data.main.humidity + "%";
  speed.innerHTML = Math.round(response.data.wind.speed) + "km/h";
  description.innerHTML = response.data.weather[0].description;
  time.innerHTML = formatDate(date);
  iconElement.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}@2x.png" class="weatherIcon"/>`;
  getForecast(response.data.name);
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "cec85bc06c0dfd484345cb4a3249819e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchInput");
  let button = document.querySelector("#button");
  searchCity(searchInput.value);
}

function formatDay(dt) {
  let date = new Date(dt * 6000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function getForecast(city) {
  let apiKey = "cec85bc06c0dfd484345cb4a3249819e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let forecastHTML = "";

  response.data.list.forEach(function (day, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `
<div class="weather-forecast" id="forecast">
<div class="weather-forecast-item">
<div class="forecast-date">${formatDay(day.dt)}</div>
<img src="http://openweathermap.org/img/wn/${
          day.weather[0].icon
        }@2x.png" class="forecast-icon";
        }" class="forecast-icon"/>
<div class="weather-forecast-temperatures">
<div class="forecast-temperature-max"><strong>${Math.round(
          day.main.temp_max
        )}°</strong></div>
<div class="forecast-temperature-min">${Math.round(day.main.temp_min)}°</div>
</div>
</div>
`;
    }
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}
button.addEventListener("click", handleSearchSubmit);

searchCity("Pretoria");
