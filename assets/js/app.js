//VARIABLES FOR ALL HTML ELEMENTS
var button = document.querySelector(".button");
var inputValue = document.querySelector(".inputValue");
var nameEl = document.querySelector("name");
var descEL = document.querySelector(".desc");
var tempEL = document.querySelector(".temp");
// const apiRoot =
//   "https://api.openweathermap.org/data/2.5/weather?q=" +
//   inputValue.value +
//   "&appid=41e61678a93c2b62b91deb9005bc4cd8";

//DATE & TIME
var currentDate = moment();
$("#currentDay").text(currentDate.format("LLL"));

// EVENT LISTENER ON CLICK
button.addEventListener("click", searchApi);

//FUNCTIONS FOR INPUT AND SEARCH (ONCLICK) BUTTON
function searchApi(event) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=41e61678a93c2b62b91deb9005bc4cd8"
  )
    .then((response) => response.json())
    .then((data) => {
      nameEl.textContent = data.name;
      descEL.textContent = data.weather[0];
      tempEL.textContent = data.main.temp;
      console.log(data);
    });
  console.log("I've been clicked!");
  return;
}

document.querySelector("name") = data.name;
document.querySelector(".desc") = data.weather[0];
document.querySelector(".temp") = data.main.temp;

//LINK TO WEATHER APIs

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
