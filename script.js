const joke = document.getElementById('joke');
const getJoke = document.getElementById('getJoke');

getJoke.addEventListener('click', generateJoke);

generateJoke();


function generateJoke() {
// API
var request = new XMLHttpRequest()

request.open('GET', 'https://bridge.buddyweb.fr/api/blagues/blagues', true)
request.onload = function() {

  //DB
  var data = JSON.parse(this.response)

  // PICK A RANDOM JOKE
  var item = data[Math.floor(Math.random() * data.length)]

  joke.innerHTML = `${item.blagues}`;
  
}
request.send()
};