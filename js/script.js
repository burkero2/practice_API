// weather_API_Key: de6d47fc7be0ea7b9cdbf02731da6db8

const API_KEY = "de6d47fc7be0ea7b9cdbf02731da6db8";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const cityName = "Dublin";

window.addEventListener('load', (event) => {
  console.log("Page loaded")
  getStatus(event);
});

// Check Key Button = Get Request (working)
async function getStatus(e) {
    const queryString = `${API_URL}?q=${cityName}&appid=${API_KEY}`;
    console.log(queryString);
    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok){
        displayStatus(data);
    } else { 
        // displayException(data);
        throw new Error(data.error); 
    }
}

function displayStatus(data){
    let weatherIcon = chooseWeather(data.weather[0].icon);
    let temp = data.main.temp;
    let description = data.weather[0].description;

    let celcius = convertCelsius(temp);

    let results = `<img src = "${weatherIcon}" />`
    results += `<h1>${celcius}°C</h1>`
    results += `<h5>${description}</h5>`

    document.getElementById("weatherIcon").innerHTML = results;
}

function chooseWeather(iconID){
    let imgIcon = "";
    if (iconID === "01d"){
        imgIcon = "https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/cloud-solid.svg";
    } else{
        imgIcon = "https://codeinstitute.s3.amazonaws.com/Instructional%20Design/weatherIcons/poo-storm-solid.svg";
    }
    return imgIcon;
}

function convertCelsius(kelvin){
    let celsius = Math.round(kelvin - 273.15);
    return celsius;
}





  
    

    