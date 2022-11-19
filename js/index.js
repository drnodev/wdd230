let year = new Date();

document.querySelector("#year").innerHTML = year.getFullYear();
document.getElementById("lu").innerHTML = new Date(document.lastModified).toLocaleString();

let xd = `Welcome back ${firstName}! You last visited on <strong>${lvdate}</strong>.`