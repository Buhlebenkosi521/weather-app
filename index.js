function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput =document.querySelector("#searchInput");
    let button =document.querySelector("#button");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML= `${searchInput.value}`;
}
button.addEventListener("click", handleSearchSubmit);