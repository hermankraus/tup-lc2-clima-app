let selection = document.getElementById("selectCity");

function addCitiesToSelection() { 
    let cities = getCitiesFromLocalStorage();
    
    if (cities.length == 0) { 
        /*selection.innerHTML += `<option disabled selected>No hay ciudades agregadas</option>`*/
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

   /* setTimeout(function() {
        document.getElementById('showCard').style.display = 'block';
    },0.1)*/

    let data = await API(selection.value);
    document.getElementById('showCard').style.display = 'block';

    let ciudad = data.name;
    let icono = data.weather[0].icon;
    let temperatura = data.main.temp;
    let sensacionTermica = data.main.feels_like;
    let humedad = data.main.humidity;
    let viento = data.wind.speed;
    let presion = data.main.pressure;

   
    let card = `<div class="card"> 
                    <h3>${ciudad}</h3>
                    <img src="http://openweathermap.org/img/wn/${icono}.png" alt="Imagen">
                    <p>Temperatura: ${temperatura}°</p>
                    <p>Sensación Térmica: ${sensacionTermica}°</p>
                    <p>Humedad: ${humedad}%</p>
                    <p>Velocidad del Viento: ${viento}km/h</p>
                    <p>Presión: ${presion} P</p>
                </div>`

    let section = document.getElementById("showCard");
    if (section) {
        section.innerHTML = "";
        section.innerHTML += card;
    }
}



/*async function cardConstructor() {

  

    setTimeout(function() {
        document.getElementById('showCard').style.display = 'block';
    },0.1)

    API(selection.value, 1);
    document.getElementById('showCard').style.display = 'none';
}*/


let weatherButton = document.getElementById("getWeather");
weatherButton.addEventListener("click", verClima)

addCitiesToSelection();