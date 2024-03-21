const url ="http://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.propgets); // note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();