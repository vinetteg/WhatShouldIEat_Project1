var randomFood = [
    {
        chicken: ["Chicken Alfredo Primavera", "Kung Pao Chicken", "Chicken Congee", "Brown Stew Chicken"],
        beef: ["Beef Dumpling Stew", "Braised Beef Chilli", "Beef Rendang", "beef Lo Mein"],
        veggie: ["Vegan lasagna", "Vegetarian Casserole", "Vegetarian Chilli", "Vegetable Shepherd's Pie"],
        fish: ["Three Fish Pie", "Fish Pie", "Fish Fofos", "Escovitch Fish"]
    }

]

function randomChickenOption() {
var randomChickenNum = Math.floor(Math.random() * 4)
console.log(randomFood[0].chicken[randomChickenNum])
}

function randomBeefOption() {
var randomBeefNum = Math.floor(Math.random() * 4)
console.log(randomFood[0].beef[randomBeefNum])
}

function randomVeggieOption() {
var randomVeggieNum = Math.floor(Math.random() * 4)
console.log(randomFood[0].veggie[randomVeggieNum])
}

function randomFishOption() {
var randomFishNum = Math.floor(Math.random() * 4)
console.log(randomFood[0].fish[randomFishNum])
}


//on button click, get var randomChickenNum first
//then do the following:
//foodDB link search + randomFood.chicken[randomChickenNum]


//button click
//make everything not needed go away
//random chicken number
//get chicken array from random food object
//make what we want come out
