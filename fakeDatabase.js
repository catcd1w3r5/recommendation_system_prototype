import {parseSubstring} from "./stringParsing.js";


const FakeDatabase = {}

//Keywords
{
    //random starting data (not needed)
    const strArr = [
        "buy",
        "c",
        "sell",
        "trade",
        "channel",
        "exchange",
        "barter",
        "swap",
        "give",
        "take",
        "get",
        "offer",
        "need",
        "want",
        "have",
        "giveaway",
        "free",
        "freebie",
        "gift",
        "metal",
        "wood",
        "concrete",

    ]


    const keywords = [];
    //parsed data
    strArr.forEach((str, index) => {
        const data = parseSubstring(str);
        data.id = index;
        keywords.push(data);
    });
    FakeDatabase.keywords = keywords;

    FakeDatabase.addKeyword = (data) => {
        data.id = keywords.length;
        keywords.push(data);
        return data.id;
    }
}

//Sell Orders
{
    const sellOrders = [];

    FakeDatabase.addSellOrder = (data) => {
        data.id = sellOrders.length;
        sellOrders.push(data);
        return data.id;
    }

    FakeDatabase.sellOrders = sellOrders;
}

//Buy Orders
{
    const buyOrders = [];

    FakeDatabase.addBuyOrder = (data) => {
        data.id = buyOrders.length;
        buyOrders.push(data);
        return data.id;
    }

    FakeDatabase.buyOrders = buyOrders;
}

export default FakeDatabase;
