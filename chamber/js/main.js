
const apiWeather= "https://api.openweathermap.org/data/2.5/weather?lat=34.022003&lon=-84.361549&appid=920c6288bdbd30f49daec29c2657439c";


function toggleMenu(){
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const hamburgerBtn = document.getElementById("hamburger-btn");
hamburgerBtn.onclick = toggleMenu;
 
const dt = new Date();
document.querySelector("#date").innerHTML = dt.toDateString()   
document.querySelector("#lastmod").innerHTML = document.lastModified

fetch(apiWeather)
.then(resp => resp.json())
.then(json => {
      console.log(json)  
})
