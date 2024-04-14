// // select HTML elements in the document
// const weatherIcon = document.querySelector("#weathericon");
// const weatherDesc = document.querySelector("#weatherdesc");
// const weatherTemp = document.querySelector("#temperature");
// const weatherWind = document.querySelector("#windspeed");

// // Define the API URL for fetching weather data
// const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=Rexburg&appid=34d2acc0a098061e9d2b47ca95b82e95&units=metric';

// function displayResults(weatherData) {
//   // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
//   const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
//   const desc = weatherData.weather[0].description;
//   const main = weatherData.weather[0].main;
  
//   weatherIcon.setAttribute('src', iconsrc);
//   weatherIcon.setAttribute('alt', desc);
//   weatherDesc.textContent = main; 
//   weatherTemp.textContent = weatherData.main.temp.toFixed(0);
//   weatherWind.textContent = weatherData.wind.speed.toFixed(0);  
// }

// async function getTheWeather() {
//   try {
//     const response = await fetch(apiURL);
//     if (response.ok) {
//       const data = await response.json();
//       displayResults(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// // Call getTheWeather function when the page loads
// // Also call displayMessage function to display the message
// window.onload = function() {
//   getTheWeather();
//   displayMessage();
// };

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

// Function to calculate the difference in days between two dates
// function getDaysSinceLastVisit(lastVisitDate) {
//   const today = new Date();
//   const lastVisit = new Date(lastVisitDate);
//   const timeDifference = today.getTime() - lastVisit.getTime();
//   const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//   return daysDifference;
// }
// JavaScript code to display the visit count
document.addEventListener("DOMContentLoaded", function() {
  // Check if localStorage is supported
  if (typeof(Storage) !== "undefined") {
      // Check if the visit count is already stored
      if (localStorage.visitCount) {
          // Increment the visit count
          localStorage.visitCount = Number(localStorage.visitCount) + 1;
      } else {
          // Set the visit count to 1 if it's the first visit
          localStorage.visitCount = 1;
      }
      // Display the visit count
      document.getElementById("visitCount").textContent = "Page Visits " + localStorage.visitCount + " time(s).";
  } else {
      // If localStorage is not supported, display an error message
      document.getElementById("visitCount").textContent = "Sorry, your browser does not support Web Storage. Visit count cannot be displayed.";
  }
});



// Function to display appropriate message based on visit history
function displayMessage() {
  const lastVisitDate = localStorage.getItem('lastVisitDate');
  if (lastVisitDate === null) {
      // First visit
      document.getElementById('message').textContent = "Welcome! Let us know if you have any questions.";
  } else {
      const daysDifference = getDaysSinceLastVisit(lastVisitDate);
      if (daysDifference < 1) {
          document.getElementById('message').textContent = "Back so soon! Awesome!";
      } else {
          const plural = daysDifference === 1 ? '' : 's';
          document.getElementById('message').textContent = "You last visited " + daysDifference + " day" + plural + " ago.";
      }
  }
  // Update last visit date in localStorage
  localStorage.setItem('lastVisitDate', new Date().toISOString());
}

// Display message when the page loads
window.onload = displayMessage;
