
const outputElement = document.getElementById('output');
let crosURL = 'https://cors-anywhere.herokuapp.com';
let endpoint = 'https://links.agastu.com/sagittarius/sirius/shop/profile/ANUGUP';
let apiUrl = `${crosURL}/${endpoint}`;

fetch(apiUrl)
  .then(response => {
    console.log("this is response => ", response);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Display data in an HTML element
    outputElement.textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });

