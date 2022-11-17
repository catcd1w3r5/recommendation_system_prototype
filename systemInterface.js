import {addBuyOrder, addSellOrder,getRelatedBuyOrders,getRelatedSellOrders} from "./Model/index.js";

const newBuyOrder = (order) => {
    return addBuyOrder(order);
}

const newSellOrder = (order) => {
    return addSellOrder(order);
}

// const getRecommendedBuyOrders = (sellOrderID) => {
//     return getRelatedBuyOrders(sellOrderID);
//
// }
//
// const getRecommendedSellOrders = (buyOrderID) => {
//     return getRelatedSellOrders(buyOrderID);
// }


export {newBuyOrder, newSellOrder, getRelatedSellOrders, getRelatedBuyOrders}
