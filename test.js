import {getRelatedBuyOrders, getRelatedSellOrders, newBuyOrder, newSellOrder} from "./systemInterface.js";



// newBuyOrder("I want to buy a car");
//
// newBuyOrder("Planning to buy a car for 1 thousand $");
// newBuyOrder("Looking for someone to do my homework");
// newBuyOrder("Buying 1000000 dollar note for $1000001")
// newBuyOrder("I want to buy a car");
// newBuyOrder("6.5 mm copper wire");


// newSellOrder("I want to sell a car");
// newSellOrder("I want sell my kidneys");
// newSellOrder("I want to sell a used car");
// newSellOrder("Selling used toilet paper");
// newSellOrder("Selling used toilet paper");
// newSellOrder("looking for wire");
newSellOrder("32 mm diameter circular hollow section");
newBuyOrder("15 cm diameter circular something section")


console.log()
console.log("Sell Orders related to buyOrder 5:");
console.log(getRelatedSellOrders(0));

console.log()
console.log("Buy Orders related to sellOrder 5:");
console.log(getRelatedBuyOrders(0));


console.log()
console.log("Sell Orders related to buyOrder 5: after adding new buy order");
console.log(getRelatedSellOrders(0));


// import {
//     blacklist,
//     buyOrders,
//     keywordBuyOrderLink,
//     keywords,
//     keywordSellOrderLink,
//     sellOrders
// } from "./Database/index.js";
//
// console.log(
//     "\n\nBlacklist: ",
//     JSON.stringify(blacklist),
//     "\n\nKeywords: ",
//     JSON.stringify(keywords),
//     "\n\nBuy Orders: ",
//     JSON.stringify(buyOrders),
//     "\n\nSell Orders: ",
//     JSON.stringify(sellOrders),
//     "\n\nKeyword Buy Order Link: ",
//     JSON.stringify(keywordBuyOrderLink),
//     "\n\nKeyword Sell Order Link: ",
//     JSON.stringify(keywordSellOrderLink),
// )
