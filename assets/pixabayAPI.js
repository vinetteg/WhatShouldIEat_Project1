// var API_KEY = "21425895-73e3d9c4c296584d1ba63965b";

// var requestUrl = 
//   "https://pixabay.com/api/?key=" +
//   API_KEY +
//   "&q=" +
//   encodeURIComponent("food+chicken+pasta");
// fetch(requestUrl)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     // for (var i = 0; i < data.length; i++) {
//     //   // var recipePic = document.getElementById("recipePic")
//     //   // recipePic.src = data.largeImageURL
//     // }
//   });

  var API_KEY = '21425895-73e3d9c4c296584d1ba63965b';
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('food chicken pasta');
$.getJSON(URL, function(data){
if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
else
    console.log('No hits');
});