import {addKeyword} from "./Model/index.js";
import {KeywordThreshold, NewKeywordThreshold} from "./config.js";

/**
 *
 * @param stringData {StringData}
 * @param otherStringData {StringData}
 * @constructor
 */
const CoefficientPercentage = (stringData, otherStringData) => {
    // console.log(otherStringData.id);
    //test for characters

    const isStringDataString = typeof stringData.character === "string";
    const isOtherStringDataString = typeof otherStringData.character === "string";
    // console.log(isStringDataString);
    // console.log(isOtherStringDataString);
    if (isStringDataString || isOtherStringDataString) {
        // console.log("string");
        if (isStringDataString && isOtherStringDataString && stringData.character === otherStringData.character) return 1;
        return 0;
    }


    // console.log("main" + otherStringData.id);
    //find smaller string (optimization)
    const stringDataLength = Object.keys(stringData.dictionary).length;
    const otherStringDataLength = Object.keys(otherStringData.dictionary).length;
    let smaller = stringData;
    let larger = otherStringData;
    if (otherStringDataLength < stringDataLength) {
        smaller = otherStringData;
        larger = stringData;
    }


    //find the total number of matches
    let matches = 0;
    Object.keys(smaller.dictionary).forEach(key => {
        const value = smaller.dictionary[key];
        if (larger.dictionary[key]) {
            const count = larger.dictionary[key];
            matches += Math.min(count, value);
        }
    });

    //calculate the percentage match
    const avgStringSize = (otherStringDataLength + stringDataLength) / 2;
    return matches / avgStringSize;
}

// 1 keyword might be a match for multiple tags
/**
 *
 * @param stringData {StringData}
 * @param tags {StringData[]}
 * @returns {{createNewTag: boolean, results:{id:number,percentage:number}[]}}
 * @constructor
 */
const KeywordCoefficient = (stringData, tags) => {
    const results = [];
    let highestPercentage = 0;
    tags.forEach(item => {
        const percentage = CoefficientPercentage(stringData, item);
        if (percentage >= KeywordThreshold) {
            results.push({id: item.id, percentage})
            if (percentage > highestPercentage) highestPercentage = percentage;
        }
    });
    const createNewTag = highestPercentage <= NewKeywordThreshold;
    return {results, createNewTag};
}
/**
 *
 * @param stringData {Set<StringData>}
 * @param tags {StringData[]}
 * @constructor
 */
const Coefficient = (stringData, tags) => {
    let confidence = 0;
    const keywordData = new Set();
    const possibleNewTags = new Set();
    stringData.forEach(data => {
        const {results, createNewTag} = KeywordCoefficient(data, tags);
        results.forEach(match => {
            confidence += match.percentage;
            keywordData.add(match.id);
        });
        if (createNewTag) possibleNewTags.add(data);
    });
    //clone keywordData
    // const searchData = Array.from(keywordData);

    possibleNewTags.forEach(item => {
        const id = addKeyword(item);
        keywordData.add(id);
    });
    // confidence = (confidence + possibleNewTags.size) / (searchData.size + possibleNewTags.size);

    const keywords = Array.from(keywordData);

    return {
        keywords
    };
}


export default Coefficient;
