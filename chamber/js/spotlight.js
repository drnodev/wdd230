/*****************SPOTLIGHT JS**************/
const jsonUrl = "https://drnodev.github.io/wdd230/chamber/data.json";

fetch(jsonUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const cos = jsonObject["companies"];
console.log(cos)
    let spotlights = cos.filter(getSpotlight);
    console.log(spotlights)
    showSpotlight(spotlights)
  });
function getSpotlight(spot){
  if (spot.status === 'gold' | spot.status === 'silver'){
    return spot
  }
}
function showSpotlight(arr){
  for (let i = 0; i < 2; i++){
    let spotImg = document.querySelector(`#spotlight${i+1} div img`)
    let spotName = document.querySelector(`#spotlight${i+1} h2`)
    let phone = document.querySelector(`#spotlight${i+1} div p:nth-child(4)`)
    let addr = document.querySelector(`#spotlight${i+1} div p:nth-child(3)`)

    let index = ~~(Math.random()*arr.length)   
    spotImg.src = arr[index].img 
    spotImg.setAttribute('alt', arr[index].name)
    spotName.textContent = arr[index].name
    phone.textContent = arr[index].phone
    addr.textContent = arr[index].address

    arr = arr.filter((item) => {
      return item != arr[index]
    })
  }
}