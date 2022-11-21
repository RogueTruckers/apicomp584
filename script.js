const apod_url = "https://api.nasa.gov/planetary/apod";
const myKey = "?api_key=vPFqHmcIegwQ6lnwUGp701XvW4JcJXf5ZfpiogIJ";

function httpGet(url) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", url + myKey, false);
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}

var apod_json = httpGet(apod_url);
var apod_array = JSON.parse(apod_json);
console.log(apod_json);

document.getElementById("apod_image").src = apod_array.hdurl;