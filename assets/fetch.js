

//fetch to get recipe from mealDB
// Chicken 
function chicken() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].chicken[randomChickenNum];

var recipeHeader = document.getElementById("recipeHeader")
var recipeInstructions = document.getElementById("ingredients")
var foodStorage = document.getElementById("foodStorage")

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);   
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
      localStorage.setItem("recipeName", data.meals[0].strMeal)
      foodStorage.innerHTML = localStorage.getItem("recipeName")
    });
  });
}

// Beef
function beef() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].beef[randomBeefNum];

var recipeHeader = document.getElementById("recipeHeader");
var recipeInstructions = document.getElementById("ingredients");
var foodStorage = document.getElementById("foodStorage")

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
      localStorage.setItem("recipeName", data.meals[0].strMeal)
      foodStorage.innerHTML = localStorage.getItem("recipeName")
    });
  });
}

// Veggie
function veggie() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].veggie[randomVeggieNum];

var recipeHeader = document.getElementById("recipeHeader")
var recipeInstructions = document.getElementById("ingredients")
var foodStorage = document.getElementById("foodStorage")

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
      localStorage.setItem("recipeName", data.meals[0].strMeal)
      foodStorage.innerHTML = localStorage.getItem("recipeName")
    });
  });
}

// Fish
function fish() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].fish[randomFishNum];

var recipeHeader = document.getElementById("recipeHeader")
var recipeInstructions = document.getElementById("ingredients")
var foodStorage = document.getElementById("foodStorage")

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
      localStorage.setItem("recipeName", data.meals[0].strMeal)
      foodStorage.innerHTML = localStorage.getItem("recipeName")
    });
  });
}
