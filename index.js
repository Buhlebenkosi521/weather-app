function refreshWeather(response) {

    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.main.temp;
    let humidity = document.querySelector(".humidity");
    let speed = document.querySelector(".speed");
    let description = document.querySelector("#description");
let timeElement = document.querySelector("#time");
let date = new Date(response.data.dt*1000);
let iconCode = response.data.weather[0].icon;
let iconElement = document.querySelector("#icon");

    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp) + "°c";
humidity.innerHTML = response.data.main.humidity + "%";
speed.innerHTML = Math.round(response.data.wind.speed) + "km/h";
description.innerHTML = response.data.weather[0].description;
time.innerHTML = formatDate(date);
icon.innerHTML = `<img src=https://openweathermap.org/img/wn/${iconCode}@2x.png class="weatherIcon"/>`;


}

function formatDate(date){
    
    let hours = date.getHours();
    let minutes =date.getMinutes();
    let days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday","Saturday",];
    let day = days[date.getDay()];
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
    let apiKey = "cec85bc06c0dfd484345cb4a3249819e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput =document.querySelector("#searchInput");
    let button =document.querySelector("#button");
searchCity(searchInput.value);
}

function displayForecast(){
let days = ["Wed", "Thu", "Fri", "Sat", "Sun"];
let forecastHTML = "";
days.forEach(function (day) {
forecastHTML =
forecastHTML +    
 `
 
<div class="weather-forecast-day">
<div class="weather-forecast-date">${day}</div>
<div class="weather-forecast-icon">🌧️</div>
<div class="weather-forecast-temperatures">
<div class="forecast-temperature-max"><strong>20°</strong>  </div>
<div class="forecast-temperature-min">14°</div>
</div>
</div>
`;

});
let forecast = document.querySelector("#forecast");
forecast.innerHTML = forecastHTML;
}
button.addEventListener("click", handleSearchSubmit);

searchCity("Pretoria");
displayForecast();
