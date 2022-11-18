import {addBuyOrder, addSellOrder,getRelatedBuyOrders,getRelatedSellOrders} from "./Model/index.js";

const newBuyOrder = addBuyOrder;

const newSellOrder =addSellOrder;

// const getRecommendedBuyOrders = (sellOrderID) => {
//     return getRelatedBuyOrders(sellOrderID);
//
// }
//
// const getRecommendedSellOrders = (buyOrderID) => {
//     return getRelatedSellOrders(buyOrderID);
// }


export {newBuyOrder, newSellOrder, getRelatedSellOrders, getRelatedBuyOrders}
