import {buyOrders, keywordBuyOrderLink, keywordSellOrderLink, sellOrders} from "../Database/index.js";
import Coefficient from "../coefficient.js";
import {getKeywords} from "./keywords.js";
import {MatchThreshold} from "../config.js";
import findPercentMatch from "../findPercentMatch.js";
import extract from "../keywordExtractor.js";

const getSellOrders = (id) => sellOrders[id]

const getRelatedSellOrders = (buyOrderID) => keywordBuyOrderLink[buyOrderID]

const addSellOrder = (order) => {
    const keywords = extract(order);
    const id = sellOrders.length;

    const coefficient = Coefficient(keywords, getKeywords());
    const mainTags = coefficient.keywords
    sellOrders.push({id, keywords: mainTags});

    keywordSellOrderLink[id] = {id: id, keywords: []};

    buyOrders
        .map((order) => {
            const {keywords} = order;
            return {
                confidence: findPercentMatch(mainTags, keywords),
                id: order.id
            };
        })
        .filter(({confidence}) => confidence >= MatchThreshold)
        .forEach((link) => {
            keywordSellOrderLink[id].keywords.push({id: link.id, confidence: link.confidence});
            keywordBuyOrderLink[link.id].keywords.push({id, confidence: link.confidence});
        });

    return id;
}
export {getSellOrders, addSellOrder, getRelatedSellOrders};
