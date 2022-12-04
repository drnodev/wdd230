const url = "https://api.openweathermap.org/data/2.5/weather?lat=13.6894&lon=-89.1872&units=imperial&appid=7ebac52f9b380f5e630aaa22ef18396a";

async function apiFetch() {
    try {
      const response = await fetch(url);
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
  apiFetch();

  function displayResults(weatherData){
    
    const type = document.getElementById("type-weather")
    const img  = document.getElementById("weather-img")
    
    type.innerText = weatherData.weather[0].description;
    img.setAttribute("src",`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`)
    document.getElementById("temp").innerHTML = weatherData.main.temp;
    document.getElementById("speed").innerHTML = weatherData.wind.speed;
console.log(weatherData)

    const temp = parseFloat(weatherData.main.temp);
    const speed = parseFloat(weatherData.wind.speed);

    let windchill = 35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * temp * Math.pow(speed, 0.16);
    windchill = Math.round(windchill);
    if(temp<=50 && speed >3) {
        document.getElementById("windchild").textContent = ""+windchill+"\xB0F";
    } else {
        document.getElementById("windchild").textContent = "N/A";
    }
}