function refreshWeather(response) {

    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.main.temp;
    let humidity = document.querySelector(".humidity");
    let speed = document.querySelector(".speed");
    let description = document.querySelector("#description");
    let ms = Date.parse("Monday 10");
let timeElement = document.querySelector("#time");

    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp) + "°c";
humidity.innerHTML = response.data.main.humidity + "%";
speed.innerHTML = Math.round(response.data.wind.speed) + "km/h";
description.innerHTML = response.data.weather[0].description;
timeElement.innerHTML = ms;






}

function searchCity(city) {
    let apiKey = "cec85bc06c0dfd484345cb4a3249819e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput =document.querySelector("#searchInput");
    let button =document.querySelector("#button");
searchCity(searchInput.value);
}
button.addEventListener("click", handleSearchSubmit);

searchCity("Pretoria");