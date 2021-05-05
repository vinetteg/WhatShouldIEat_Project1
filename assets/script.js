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
function beefRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
}
beefBtn.addEventListener("click", randomBeefOption);
beefBtn.addEventListener("click", beefRecipes);
function chickenRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
}
chickenBtn.addEventListener("click", randomChickenOption);
chickenBtn.addEventListener("click", chickenRecipes);
function fishRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
    console.log(randomFishNum)
}
fishBtn.addEventListener("click", randomFishOption);
fishBtn.addEventListener("click", fishRecipes);
function veggieRecipes(){
    headerEl.style.display="none";
    landingContainer.style.display="none";
    recipeArea.style.display="block";
}
veggieBtn.addEventListener("click", randomVeggieOption);
veggiesBtn.addEventListener("click", veggieRecipes);
function showHistory(){
    recipeArea.style.display="none";
    foodHistory.style.display="block";
}
historyBtn.addEventListener("click", showHistory);
//PENDING APIs
// function reRoll(){}
// reRollBtn.addEventListener("click",);
function returnHome(){
    foodHistory.style.display="none";
    headerEl.style.display="block";
    landingContainer.style.display="block";
}
returnBtn.addEventListener("click", returnHome);
