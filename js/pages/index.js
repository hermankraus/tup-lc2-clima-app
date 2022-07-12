let selection = document.getElementById("selectCity");

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

async function verClima() {
    const cargando = document.getElementById("loadingSymbol");
    cargando.style.display = 'block';
    document.getElementById('showCard').style.display = 'none';
    let data = await API(selection.value);
    cargando.style.display = 'none';
    document.getElementById('showCard').style.display = 'block';

    const weatherData={
        ciudad: data.name,
        icono: data.weather[0].icon,
        temperatura: data.main.temp,
        sensacionTermica: data.main.feels_like,
        humedad: data.main.humidity,
        viento: data.wind.speed,
        presion: data.main.pressure,
    }
   
    let card = `<div class="card"> 
                    <h3>${weatherData.ciudad}</h3>
                    <img src="http://openweathermap.org/img/wn/${weatherData.icono}.png" alt="Imagen">
                    <p>Temperatura: ${weatherData.temperatura}°</p>
                    <p>Sensación Térmica: ${weatherData.sensacionTermica}°</p>
                    <p>Humedad: ${weatherData.humedad}%</p>
                    <p>Velocidad del Viento: ${weatherData.viento}km/h</p>
                    <p>Presión: ${weatherData.presion} P</p>
                </div>`

    let section = document.getElementById("showCard");
    if (section) {
        section.innerHTML = "";
        section.innerHTML += card;
    }
}

let weatherButton = document.getElementById("getWeather");
weatherButton.addEventListener("click", verClima)

addCitiesToSelection();