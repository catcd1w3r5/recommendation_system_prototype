import extract from "./keywordExtractor.js";
import Coefficient from "./coefficient.js";
import FakeDatabase from "./fakeDatabase.js";

const newBuyOrder = (order) => {
    const keywords = extract(order);
    const matches = Coefficient(keywords, FakeDatabase.keywords);
    const {confidence, searchData, ...saveData} = matches;
    return FakeDatabase.addBuyOrder({keywords});
}

const newSellOrder = (order) => {
    const keywords = extract(order);
    const matches = Coefficient(keywords, FakeDatabase.keywords);
    const {confidence, searchData, ...saveData} = matches;
    return FakeDatabase.addSellOrder({keywords});
}

const getRelatedBuyOrders = (sellOrderID, matchThreshold = 0.5) => {
    const mainKeywords = FakeDatabase.sellOrders[sellOrderID].keywords;
    const mainTags = Coefficient(mainKeywords, FakeDatabase.keywords).searchData;
    const orders = FakeDatabase.buyOrders;
    return orders.map((order) => {
        const {keywords} = order;
        const tags = Coefficient(keywords, FakeDatabase.keywords);
        return {
            confidence: findPercentMatch(mainTags, tags.searchData),
            id: order.id
        };
    }).filter((order) => {
        return order.confidence >= matchThreshold;
    });
}

const getRelatedSellOrders = (buyOrderID, matchThreshold = 0.5) => {
    const mainKeywords = FakeDatabase.buyOrders[buyOrderID].keywords;
    const mainTags = Coefficient(mainKeywords, FakeDatabase.keywords).searchData;
    const orders = FakeDatabase.sellOrders;
    return orders.map((order) => {
        const {keywords} = order;
        const tags = Coefficient(keywords, FakeDatabase.keywords);
        return {
            confidence: findPercentMatch(mainTags, tags.searchData),
            id: order.id
        };
    }).filter((order) => {
        return order.confidence >= matchThreshold;
    });
}

/**
 *
 * @param numArr1 {Array<number>}
 * @param numArr2 {Array<number>}
 * @returns {number}
 */
const findPercentMatch = (numArr1, numArr2) => {
    const matches = numArr1.filter((item) => numArr2.includes(item));
    return matches.length / numArr1.length;
}

export {newBuyOrder, newSellOrder, getRelatedBuyOrders, getRelatedSellOrders}
