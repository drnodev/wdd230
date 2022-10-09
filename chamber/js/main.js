function toggleMenu(){
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const hamburgerBtn = document.getElementById("hamburger-btn");
hamburgerBtn.onclick = toggleMenu;
 
 
const dt = new Date();
document.querySelector("#date").innerHTML = dt.toDateString()   

document.querySelector("#lastmod").innerHTML = document.lastModified
