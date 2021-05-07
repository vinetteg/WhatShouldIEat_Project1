//fetch to get image from mealDB

function getRecipeChicken() {
var getRecipe = function (recipe) {
  var apiMeal = "www.themealdb.com/api/json/v1/1/search.php?s=" + "randomFood[0].chicken[randomChickenNum])";
  

  fetch(apiMeal).then(function (response) {
    response.json().then(function (data) {
      displayRecipe(data);
    });
  });
};

}
var recipeContainerEl = document.querySelector("#recipeContainer");

