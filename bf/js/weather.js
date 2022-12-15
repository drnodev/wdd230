const url = "https://api.openweathermap.org/data/2.5/onecall?lat=13.6894&lon=-89.1872&units=imperial&exclude=minutely,hourly&appid=517dcf5775e231ee14a4ac01faf8814c";


//CURRENT WEATHER
const current = document.querySelector(".currentWeather");
const forecast = document.querySelector(".forecast");

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    localStorage.setItem('jsonObject', JSON.stringify(jsObject))
    const img = document.createElement("img");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    console.log(jsObject)

    var condition = jsObject.current.weather[0].main;
    var temp = ~~jsObject.current.temp;
    var hum = ~~jsObject.current.humidity;
    var feel = ~~jsObject.current.feels_like;

    img.src = `https://openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`
    img.alt = condition;
    img.width = 100;
    img.height = 100;

    h4.innerHTML = `${condition} ${temp}&#8457;`;
    p.innerHTML = `Humidity: ${hum}&#8457;<br>Wind Chill: ${feel}&#8457`;

    current.append(img, h4, p);
    
    for (let i = 1; i < 4; i++) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const h3 = document.createElement("h3");
      const h4 = document.createElement("h4");
      const p = document.createElement("p");

      div.setAttribute("class", `day`);

      let icon = jsObject.daily[i].weather[0].icon;
      let condition = jsObject.daily[i].weather[0].main;
      let temp = ~~jsObject.daily[i].temp.day;
      let hum = ~~jsObject.daily[i].humidity;
      let feel = ~~jsObject.daily[i].feels_like.day;
      let unixdt = ~~jsObject.daily[i].dt;

      img.src = `https://openweathermap.org/img/w/${icon}.png`;
      img.alt = condition;
      

      h3.textContent = date(new Date(unixdt * 1000))
      h4.innerHTML = `${condition} ${temp}&#8457;`;
      p.innerHTML = `Humidity: ${hum}&#8457;<br>Wind Chill: ${feel}&#8457`;

      div.append(h3, img, h4, p);
      forecast.append(div);
    }
  });

function date(i) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${months[i.getMonth()]} ${days[i.getDay()]} ${i.getFullYear()}`;
}