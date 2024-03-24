// select HTML elements in the document
const weatherIcon = document.querySelector("#weathericon");
const weatherDesc = document.querySelector("#weatherdesc");
const weatherTemp = document.querySelector("#temperature");
const weatherWind = document.querySelector("#windspeed");

function displayResults(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
  const desc = weatherData.weather[0].description;
  const main = weatherData.weather[0].main;
  
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherDesc.textContent = main; 
  weatherTemp.textContent = weatherData.main.temp.toFixed(0);
  weatherWind.textContent = weatherData.wind.speed.toFixed(0);  
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();


// Function to calculate the difference in days between two dates
function getDaysSinceLastVisit(lastVisitDate) {
  const today = new Date();
  const lastVisit = new Date(lastVisitDate);
  const timeDifference = today.getTime() - lastVisit.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

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