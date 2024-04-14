// Step 3: JavaScript

// 2. Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// 3. Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector('#cards');

// 4. Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
  try {
    // 5. Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);
    // 6. Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();
    // 7. Add a console.table() expression method to check the data response at this point in the console window.
    console.table(data.prophets); // temporary testing of data retrieval
    // 10. Call a function named "displayProphets" and include the "data.prophets" argument.
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// 8. Call the function getProphetData() in the main line of your .js code to test the fetch and response.
getProphetData();

// 11. Define a function expression named "displayProphets" that handles a single parameter named "prophets".
const displayProphets = (prophets) => {
  // 12. Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time.
  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let fullName = document.createElement('h2'); // create h2 element for full name
    let birthInfo = document.createElement('p'); // birth information
    let portrait = document.createElement('img'); // create img element for portrait

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Build the birth information paragraph
    birthInfo.textContent = `Born: ${prophet.birthdate}, ${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(birthInfo); // Append the birth information paragraph
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}




// const url ="http://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

// const cards = document.querySelector('#cards');

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     //console.table(data.prophets);
//     displayProphets(data.propgets); // note that we reference the prophets array of the JSON data object, not just the object
// }

// getProphetData();