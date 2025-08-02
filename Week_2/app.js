const apiKey = "28a5fc7c42964b3d0b238b29d044af71"; 
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("result");

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return alert("Please enter a city name.");

  try {
    const data = await getWeatherData(city);
    showResult(data);
  } catch (err) {
    result.textContent = "City not found or API error.";
  }
});

async function getWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
}

function showResult(data) {
  result.innerHTML = `
    <strong>City:</strong> ${data.name}<br>
    <strong>Temperature:</strong> ${data.main.temp} °C<br>
    <strong>Description:</strong> ${data.weather[0].description}<br>
    <strong>Humidity:</strong> ${data.main.humidity}%<br>
    <strong>Wind:</strong> ${data.wind.speed} m/s
  `;
}
