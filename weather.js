


window.addEventListener('DOMContentLoaded', () => {
    const apiKey = '34d2acc0a098061e9d2b47ca95b82e95';
    const city = 'Rexburg';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

            const weatherData = document.getElementById('weather-data');
            weatherData.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <img src="${iconUrl}" alt="Weather Icon">
            `;
        })
        .catch(error => {
            console.log('Error fetching weather data:', error);
            const weatherData = document.getElementById('weather-data');
            weatherData.innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
        });
});
