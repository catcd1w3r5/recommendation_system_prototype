import {buyOrders, keywordBuyOrderLink, keywordSellOrderLink, sellOrders} from "../Database/index.js";
import Coefficient from "../coefficient.js";
import {getKeywords} from "./keywords.js";
import {MatchThreshold} from "../config.js";
import findPercentMatch from "../findPercentMatch.js";
import extract from "../keywordExtractor.js";

const getBuyOrders = (id) => buyOrders[id]

const getRelatedBuyOrders = (sellOrderID) => keywordSellOrderLink[sellOrderID]

const addBuyOrder = (order) => {
    const keywords = extract(order)
    const id = buyOrders.length;

    const coefficient = Coefficient(keywords, getKeywords());
    const mainTags = coefficient.keywords
    buyOrders.push({id, keywords: mainTags});

    keywordBuyOrderLink[id] = {id: id, keywords: []};

    sellOrders
        .map((order) => {
            const {keywords} = order;
            return {
                confidence: findPercentMatch(mainTags, keywords),
                id: order.id
            };
        })
        .filter(({confidence}) => confidence >= MatchThreshold)
        .forEach((link) => {
            keywordBuyOrderLink[id].keywords.push({id: link.id, confidence: link.confidence});
            keywordSellOrderLink[link.id].keywords.push({id, confidence: link.confidence});
        });

    return id;
}

export {getBuyOrders, addBuyOrder, getRelatedBuyOrders};
