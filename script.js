const apod_url = "https://api.nasa.gov/planetary/apod";
const myKey = "?api_key=vPFqHmcIegwQ6lnwUGp701XvW4JcJXf5ZfpiogIJ";

function httpGet(url) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", url + myKey, false);
  xmlHttpReq.send(null);
  return xmlHttpReq.responseText;
}
console.log(httpGet(apod_url));
