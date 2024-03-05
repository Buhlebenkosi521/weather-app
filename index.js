function refreshWeather(response) {
    console.log(response.data.main.temp);
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.main.temp;
    let humidity = document.querySelector(".humidity");
    let speed = document.querySelector(".speed");


    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round(response.data.main.temp) + "°c";
humidity.innerHTML = response.data.main.humidity = + "%";
speed.innerHTML = Math.round(response.data.wind.speed) + "km/h";




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
button.addEventListener("click", handleSearchSubmit);

searchCity("Pretoria");