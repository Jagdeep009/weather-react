const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "218835aa835083bdb68a2a4f7143d43c";

async function getWeatherInfo(city) {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();

    let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
        wind: jsonResponse.wind.speed,
        visibility: jsonResponse.visibility,
    }

    return result;
}

export default getWeatherInfo;