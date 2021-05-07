var API_KEY = "21425895-73e3d9c4c296584d1ba63965b";

// chickenImageFetch
// document.getElementById("chicken").addEventListener("click", function(){
var requestUrl =
  "https://pixabay.com/api/?key=" +
  API_KEY +
  "&id=" +
  "randomImage[0].chicken[randomChickenNum]";
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.hits[0].largeImageURL);
    var recipePic = document.getElementById("recipePic");
    recipePic.setAttribute("src", data.hits[0].largeImageURL);
  });

// // beefImageFetch
var requestUrl =
  "https://pixabay.com/api/?key=" +
  API_KEY +
  "&id=" +
  "randomImage[0].beef[randomBeefNum]";
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.hits[0].largeImageURL);
    var recipePic = document.getElementById("recipePic");
    recipePic.setAttribute("src", data.hits[0].largeImageURL);
  });

// // veggieImageFetch
var requestUrl =
  "https://pixabay.com/api/?key=" +
  API_KEY +
  "&id=" +
  "foodImage[0].veggie[randomVeggieNum]";
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.hits[0].largeImageURL);
    var recipePic = document.getElementById("recipePic");
    recipePic.setAttribute("src", data.hits[0].largeImageURL);
  });

// // fishImageFetch
var requestUrl =
  "https://pixabay.com/api/?key=" +
  API_KEY +
  "&id=" +
  "foodImage[0].fish[randomFishNum]";
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.hits[0].largeImageURL);
    var recipePic = document.getElementById("recipePic");
    recipePic.setAttribute("src", data.hits[0].largeImageURL);
  });
