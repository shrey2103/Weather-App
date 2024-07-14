const apiKey = "8305b3edac2f6178ef0c4d30084f3143";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    if (!city) {
        alert("Please enter a valid city name.");
        return;
    }

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        alert("City not found. Please enter a valid city name.");
        return;
    }

    const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "icons/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "icons/sun.png";
            break;
        case "Rain":
            weatherIcon.src = "icons/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "icons/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "icons/fog.png";
            break;
        case "Thunderstorm":
            weatherIcon.src = "icons/storm.png";
            break;
        case "Snow":
            weatherIcon.src = "icons/snow.png";
            break;
        default:
            weatherIcon.src = "icons/default.png";
            break;
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchCity.value);
});
