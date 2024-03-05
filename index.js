function refreshWeather(response) {
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");

    temperatureElement.innerHTML = response.data.main.temp;
    cityElement.innerHTML = response.data.name;
}


function searchCity(city) {
    let apiKey = "cec85bc06c0dfd484345cb4a3249819e";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput =document.querySelector("#searchInput");
let cityElement=document.querySelector("#city");
cityElement.innerHTML= `${searchInput.value}`;
    let button =document.querySelector("#button");

}
button.addEventListener("click", handleSearchSubmit);

refreshWeather();