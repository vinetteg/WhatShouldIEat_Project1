var beefBtn = document.querySelector("#beef");
var chickenBtn = document.querySelector("#chicken");
var fishBtn = document.querySelector("#fish");
var veggiesBtn = document.querySelector("#veggies");
var historyBtn = document.querySelector("#historyBtn");
var reRollBtn = document.querySelector("#reRollBtn")
var returnBtn = document.querySelector("#returnBtn")
var headerEl = document.querySelector(".header");
var landingContainer = document.querySelector(".landingContainer");
var recipeArea = document.querySelector(".recipeArea");
var foodHistory = document.querySelector(".foodHistory");
var homeBtn = document.querySelector("#homeBtn");

function beefRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
}

beefBtn.addEventListener("click", randomBeefOption);
beefBtn.addEventListener("click", beefImageFunc);
beefBtn.addEventListener("click", beefRecipes);
beefBtn.addEventListener("click", beef);

function chickenRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
}

chickenBtn.addEventListener("click", randomChickenOption);
chickenBtn.addEventListener("click", chickenImageFunc);
chickenBtn.addEventListener("click", chickenRecipes);
chickenBtn.addEventListener("click", chicken);

function fishRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
}

fishBtn.addEventListener("click", randomFishOption);
fishBtn.addEventListener("click", fishImageFunc);
fishBtn.addEventListener("click", fishRecipes);
fishBtn.addEventListener("click", fish);

function veggieRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
}

veggiesBtn.addEventListener("click", randomVeggieOption);
veggiesBtn.addEventListener("click", veggieImageFunc);
veggiesBtn.addEventListener("click", veggieRecipes);
veggiesBtn.addEventListener("click", veggie);

function showHistory(){
    recipeArea.style.display="none";
    foodHistory.style.display="block";
}
historyBtn.addEventListener("click", showHistory);

function returnHome(){
    foodHistory.style.display="none";
    headerEl.style.display="block";
    landingContainer.style.display="block";
}
returnBtn.addEventListener("click", returnHome);

function homeButton(){
    recipeArea.style.display="none";
    headerEl.style.display="block";
    landingContainer.style.display="block";
}

homeBtn.addEventListener("click", homeButton);
