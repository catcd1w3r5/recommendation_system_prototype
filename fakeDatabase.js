import {parseSubstring} from "./stringParsing.js";


const FakeDatabase = {}

//Keywords
{
    //raw data
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
        const data2 = parseSubstring(str);
        data2.id = index;
        keywords.push(data2);
    });

    FakeDatabase.keywords = keywords;
}


export default FakeDatabase;