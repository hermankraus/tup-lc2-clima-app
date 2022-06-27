let selection = document.getElementById("selectCity");


function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

function addCitiesToSelection() { 
    let cities = getCitiesFromLocalStorage();

    if (cities.length == 0) { 
        selection.innerHTML += `<option disabled selected>No hay ciudades agregadas</option>`
    }
    else {
        selection.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
        for (let i = 0; i < cities.length; i++) { 
            selection.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

function cardConstructor() {
    API(selection.value);
}

let weatherButton = document.getElementById("getWeather");
weatherButton.addEventListener("click", cardConstructor)

addCitiesToSelection();