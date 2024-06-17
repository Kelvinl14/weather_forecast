const body = document.querySelector('body')

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
  }

fetch("https://api.pexels.com/v1/search?query=nature",{
    headers: {
      Authorization: "8oKcdB8tqbYTgqqP4wIPvPBg8AgOrMdZ2XiUYl6WXZBllw0molEctd5h"
    }
  })
     .then(resp => {
       return resp.json()
     })
     .then(data => {
       body.style.backgroundImage = "url(" + data.photos[getRandomInt(0, 15)].src['original'] +")";
       document.getElementById('author').innerHTML = `Image author ${data.photos[0].photographer}`
      

     })



const apiKey = '9d9a8f0a13eb29fe1e10e4d8ff5c85eb';
const city = "São Paulo"


// Fazendo uma solicitação para a API
function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro na solicitação: ' + response.statusText);
          }
          return response.json();
      })
      .then(data => {
          const weatherDiv = document.getElementById('weather');
          const temp = document.getElementById('temp');
          const temp_min = document.getElementById('temp-min');
          const temp_max = document.getElementById('temp-max');
          const descrip = document.getElementById('descrip');
          const icon = document.getElementById('icon');
          const humity = document.getElementById('humity')

          const temperature = Math.round(data.main.temp);
          const description = data.weather[0].description;
          const img = data.weather[0].icon
          

          weatherDiv.innerHTML = `Tempo em ${city}.`;
          temp.innerHTML = `${temperature}°C`
          temp_min.innerHTML = `Mínima ${Math.round(data.main.temp_min)}°C`;
          temp_max.innerHTML = `Maxíma ${Math.round(data.main.temp_max)}°C`;
          descrip.innerHTML = `${description}`;
          icon.src = `https://openweathermap.org/img/wn/${img}.png`;
          humity.innerHTML = `Humidade ${data.main.humidity}%`;
      })
      .catch(error => {
          console.error('Houve um problema com a solicitação fetch:', error);
      });
  
    
}

function getCity(){
  const search = document.getElementById("search")


  console.log(search.value)
  getWeather(search.value)
}

function enter(e) {
  var key=e.keyCode || e.which;
  if (key==13){
     getCity();
  }
}