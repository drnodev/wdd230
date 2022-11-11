let visit = document.querySelector("#visit");
let lv = Number(localStorage.getItem("visits"));
let today = Date.now();
let msInDay = 1000 * 60 * 60 * 24;
let timeSince = Math.round((today - lv) / msInDay);

localStorage.setItem("visits", today);

if (visit) {
  if (lv !== 0) {
    visit.innerHTML = `Welcome Back! It has been ${timeSince} days since your last visit.`;
  } else {
    visit.textContent = `Welcome to the Chamber! Enjoy your first visit!`;
  }
}