async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "a4483f784ffc374b7c87374811398e3d";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      document.getElementById("weather-result").innerHTML = "City not found.";
      return;
    }

    document.getElementById("weather-result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weather-result").innerHTML = "Error getting weather.";
  }
}

