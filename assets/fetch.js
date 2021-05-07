
//fetch to get image from mealDB

function getRecipeChicken() {
var getRecipe = function (recipe) {
  var apiMeal = "www.themealdb.com/api/json/v1/1/search.php?s=" + "randomFood[0].chicken[randomChickenNum])";

//fetch to get recipe from mealDB
// Chicken 
chickenBtn.addEventListener("click", function() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].chicken[randomChickenNum];

var recipeHeader = document.getElementById("recipeHeader")
var recipeInstructions = document.getElementById("ingredients")

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);   
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
    });
  });
})

// Beef
beefBtn.addEventListener("click", function() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].beef[randomBeefNum];

var recipeHeader = document.getElementById("recipeHeader")
var recipeInstructions = document.getElementById("ingredients")


}
var recipeContainerEl = document.querySelector("#recipeContainer");

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
    });
  });
})

// Veggie
veggiesBtn.addEventListener("click", function() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].veggie[randomVeggieNum];

var recipeHeader = document.getElementById("recipeHeader")
var recipeInstructions = document.getElementById("ingredients")

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
    });
  });
})

// Fish
fishBtn.addEventListener("click", function() {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s="+randomFood[0].fish[randomFishNum];

var recipeHeader = document.getElementById("recipeHeader")
var recipeInstructions = document.getElementById("ingredients")

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      recipeHeader.innerHTML = data.meals[0].strMeal
      recipeInstructions.innerHTML = data.meals[0].strInstructions
    });
  });
})

