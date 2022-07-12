function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

 
async function API(cityName){

        let apiKey="db2d446e0bf01fdcb6eec3cea77c9a10"
        return fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=metric&lang=es")
        .then(response => {
            if (response.status == 200) return response.json();

            else{throw new Error}
        })
        .then(data => {
            return data;

            /*if(flag!=0){
            verClima(data);
            }else{data}*/
        })
        .catch(error => {
            return "error"
        });


    }