import {newBuyOrder, newSellOrder,getRelatedBuyOrders,getRelatedSellOrders} from "./systemInterface.js";

newBuyOrder("I want to buy a car");
newBuyOrder("Planning to buy a car for 1 thousand $");
newBuyOrder("Looking for someone to do my homework");
newBuyOrder("Buying 1000000 dollar note for $1000001")
newBuyOrder("I want to buy a car");
newBuyOrder("6.5 mm copper wire");


newSellOrder("I want to sell a car");
newSellOrder("I want sell my kidneys");
newSellOrder("I want to sell a used car");
newSellOrder("Selling used toilet paper");
newSellOrder("Selling used toilet paper");
newSellOrder("looking for wire")

console.log()
console.log("Sell Orders related to buyOrder 0:");
console.log(getRelatedSellOrders(5));

console.log()
console.log("Buy Orders related to sellOrder 0:");
console.log(getRelatedBuyOrders(5));

newSellOrder("copper wire at least 3mm in length");

console.log()
console.log("Sell Orders related to buyOrder 0: after adding new buy order");
console.log(getRelatedSellOrders(5));


