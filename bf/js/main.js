const lastMod = document.querySelector("#lastMod");
let date = document.lastModified;
lastMod.textContent = `Nelson Ortega | Last Modified: ${date}`;
const btn = document.querySelector("#btn-ham");
const nav = document.querySelector("#nav-header");

btn.addEventListener("click", () => {
    nav.classList.toggle("open");
});
