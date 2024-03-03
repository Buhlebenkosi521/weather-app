function searchCity(city) {
    let apiKey = "cec85bc06c0dfd484345cb4a3249819e";
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric";
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput =document.querySelector("#searchInput");
    let button =document.querySelector("#button");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= `${searchInput.value}`;
}
button.addEventListener("click", handleSearchSubmit);