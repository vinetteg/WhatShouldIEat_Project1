var randomFood = [
  {
    chicken: ["Chicken Alfredo Primavera", "Kung Pao Chicken", "Chicken Congee", "Brown Stew Chicken"],
    beef: ["Beef Dumpling Stew", "Braised Beef Chilli", "Beef Rendang", "beef Lo Mein"],
    veggie: ["Vegan lasagna", "Vegetarian Casserole", "Vegetarian Chilli", "Vegetable Shepherd's Pie"],
    fish: ["Saltfish and Ackee", "Fish Pie", "Fish Fofos", "Escovitch Fish"],
  },
];
var randomChickenNum = 0;
function randomChickenOption() {
  var randomChickenNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].chicken[randomChickenNum]);
}
var randomBeefNum = 0;
function randomBeefOption() {
  var randomBeefNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].beef[randomBeefNum]);
}
var randomVeggieNum = 0;
function randomVeggieOption() {
  var randomVeggieNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].veggie[randomVeggieNum]);
}
var randomFishNum = 0;
function randomFishOption() {
  randomFishNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].fish[randomFishNum]);
  return randomFishNum;
}
console.log(randomFishNum)
//lets add the large image url from pics api here
var foodImage = [
  {
    chicken: ["", "", "", ""],
    beef: ["", "", "", ""],
    veggie: ["", "", "", ""],
    fish: ["", "", "", ""],
  },
];
function chickenImageFunc() {
(foodImage[0].chicken[randomChickenNum]);
}
function beefImageFunc() {
(foodImage[0].beef[randomBeefNum]);
}
function veggieImageFunc() {
(foodImage[0].veggie[randomVeggieNum]);
}
function fishImageFunc() {
(foodImage[0].fish[randomFishNum]);
}