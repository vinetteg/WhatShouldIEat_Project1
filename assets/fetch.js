//fetch to get image from mealDB
var getRecipe = function (recipe) {
  var apiMeal = "https://www.themealdb.com/api/json/v1/1/filter.php?i=beef";

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      displayRecipe(data);
    });
  });
};

var recipeContainerEl = document.querySelector("#recipeContainer");

var displayRecipe = function (showRecipe) {
  recipeContainerEl.textContent = "";
};
