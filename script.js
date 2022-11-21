import { tween } from 'popmotion';

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
console.log(apod_array);

document.getElementById("apod_image").src = apod_array.hdurl;
document.getElementById("apod_title").innerHTML = apod_array.title;
document.getElementById("apod_explanation").innerHTML = apod_array.explanation;
document.getElementById("apod_date").innerHTML = apod_array.date;

const contianer = popmotion.styler(document.querySelector(".wrapper"));
const sectionElements = document.querySelector(".main1");
const msgPop = popmotion.styler(document.querySelector(".h2"));

popmotion
  .tween({
    from: {
      scale: 0.7,
    },
    to: {
      scale: 1,
    },
    duration: 1000,
  })
  .start(container.set);
