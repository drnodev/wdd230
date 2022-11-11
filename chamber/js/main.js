
let dt = new Date();
let day = dt.getDay();
let msg = document.querySelector("#msg");


if (day == 1 || day == 2) {
  msg.classList.add("show");
} else {
  msg.classList.add("hide");
}


function toggleMenu(){
    document.getElementById("main-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const hamburgerBtn = document.getElementById("hamburger-btn");
hamburgerBtn.onclick = toggleMenu;
 

document.querySelector("#date").innerHTML = dt.toDateString()   
document.querySelector("#lastmod").innerHTML = document.lastModified


let images = Array.from(document.querySelectorAll("img[data-src]"));
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.map((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  });

  images.map((img) => {
    observer.observe(img);
  });
} else {
  images.map((img) => {
    load(img);
  });
}