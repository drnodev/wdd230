
const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);;

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