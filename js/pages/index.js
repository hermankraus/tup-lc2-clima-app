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

    document.querySelector('.loadingSymbol').style.display = 'block';
    removeLoadingSymbol();

    setTimeout(function() {
        document.querySelector('.card').style.display = 'block';
    },0.1)

    API(selection.value);
    document.querySelector('.card').style.display = 'none';
}


let weatherButton = document.getElementById("getWeather");
weatherButton.addEventListener("click", cardConstructor)

addCitiesToSelection();