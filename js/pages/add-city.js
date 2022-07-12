async function checkCity(ciudad_nueva) {
    let cities = getCitiesFromLocalStorage();
    const cargando = document.getElementById("loadingSymbol");
    cargando.style.display = 'block';

    for (let i = 0; i < cities.length; i++) { 
        if (ciudad_nueva == cities[i]) { 
            return "warning";
        };
    };

    if (await API(ciudad_nueva) == "error") {
        cargando.style.display = 'none';
        document.getElementById("results").style.display = 'block';
        document.getElementById("results").innerHTML += '<p class="results error">Error: La ciudad ingresada no se encuentra en la API o se produjo un error al consultar</p>';;
        removeAlert();
        
    }
    else {
        return "success"; 
    }
}

async function addCityToLocalStorage() { 
    let cities = getCitiesFromLocalStorage();
    let ciudad_nueva = document.getElementById("newCity").value; 
    ciudad_nueva = ciudad_nueva.toUpperCase()

    const cargando = document.getElementById("loadingSymbol");
    cargando.style.display = 'block';

    switch(await checkCity(ciudad_nueva)) {
        case "success": 
            cities.push(ciudad_nueva); 
            localStorage.setItem("CITIES", JSON.stringify(cities));

            cargando.style.display = 'none';
            document.getElementById("results").style.display = 'block';
            document.getElementById("results").innerHTML += '<p class="results success">Ciudad agregada con éxito</p>';
            removeAlert(); 
            break;

        case "warning":
            cargando.style.display = 'none';
            document.getElementById("results").style.display = 'block';
            document.getElementById("results").innerHTML += '<p class="results warning">La ciudad ingresada ya se encuentra almacenada</p>';
            removeAlert();
            break;

        default:
            break;
    };
};

let buttonAddCity = document.getElementById("buttonAddCity"); 
buttonAddCity.addEventListener("click", addCityToLocalStorage);

function removeAlert() { 
    setTimeout(function() {
        document.getElementsByClassName("results")[0].remove();
    }, 4000);
}
