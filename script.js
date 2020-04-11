const joke = document.getElementById('joke');

generateJoke();


function generateJoke() {
// API
const request = new XMLHttpRequest()

request.open('GET', 'https://bridge.buddyweb.fr/api/blagues/blagues', true)
request.onload = function() {

  //DB
  const data = JSON.parse(this.response)

  // PICK A RANDOM JOKE
  const item = data[Math.floor(Math.random() * data.length)]

  joke.innerHTML = `${item.blagues}`;
  
}
request.send()
};