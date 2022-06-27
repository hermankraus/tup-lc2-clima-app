


async function checkCity(ciudad_nueva) {
    let cities = getCitiesFromLocalStorage();
  
    for (let i = 0; i < cities.length; i++) { 
        if (ciudad_nueva == cities[i]) { 
            return "warning";
        };
    };

    if (await API(ciudad_nueva) == "error") { 
        return "error";
    }
    else {
        return "success"; 
    };
}

async function addCityToLocalStorage() { 
    let cities = getCitiesFromLocalStorage();
    let ciudad_nueva = document.getElementById("newCity").value; 
    ciudad_nueva = ciudad_nueva.toUpperCase() 

    switch(await checkCity(ciudad_nueva)) {
        case "success": 
            cities.push(ciudad_nueva); 
            localStorage.setItem("CITIES", JSON.stringify(cities)); 
            document.getElementById("results").innerHTML += successResult; 
            removeAlert(); 
            break;
        case "warning":
            document.getElementById("results").innerHTML += warningResult; 
            removeAlert();
            break;
        case "error":
            document.getElementById("results").innerHTML += errorResult;
            removeAlert();
            break;
    };
};

let successResult = '<p class="results success">Ciudad agregada con éxito</p>'; 
let errorResult = '<p class="results error">Error: La ciudad ingresada no se encuentra en la API o se produjo un error al consultar</p>';
let warningResult = '<p class="results warning">La ciudad ingresada ya se encuentra almacenada</p>';
let buttonAddCity = document.getElementById("buttonAddCity"); 
buttonAddCity.addEventListener("click", addCityToLocalStorage); 
function removeAlert() { 
    setTimeout(function() {
        document.getElementsByClassName("results")[0].remove();
    }, 1000);
}



