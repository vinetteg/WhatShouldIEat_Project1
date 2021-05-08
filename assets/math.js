var randomFood = [
  {
    chicken: ["Chicken Alfredo Primavera", "Kung Pao Chicken", "Chicken Congee", "Brown Stew Chicken"],
    beef: ["Beef Dumpling Stew", "Braised Beef Chilli", "Beef Rendang", "beef Lo Mein"],
    veggie: ["Vegan lasagna", "Vegetarian Casserole", "Vegetarian Chilli", "Vegetable Shepherd's Pie"],
    fish: ["Saltfish and Ackee", "Fish Pie", "Fish Fofos", "Escovitch Fish"],
  },
];

function randomChickenOption() {
   window.randomChickenNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].chicken[randomChickenNum]);
}

function randomBeefOption() {
  window.randomBeefNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].beef[randomBeefNum]);
}

function randomVeggieOption() {
  window.randomVeggieNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].veggie[randomVeggieNum]);
}

function randomFishOption() {
  window.randomFishNum = Math.floor(Math.random() * 4);
  console.log(randomFood[0].fish[randomFishNum]);
}
//lets add the large image url from pics api here
var foodImage = [
  {
    chicken: ["5037799", "5700078", "982895", "2523140"],
    beef: ["632203", "5446080", "608973", "4985993"],
    veggie: ["6156586","1804446","2755466","3586488"],
    fish: ["2834209","2552022","601250","5126484"]
  },
];
