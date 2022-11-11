/**
 *
 * @param stringData {StringData}
 * @param otherStringData {StringData}
 * @constructor
 */
const CoefficientPercentage = (stringData, otherStringData) => {
    // console.log(otherStringData.id);
    //test for characters

    const isStringDataString = typeof stringData.map === "string";
    const isOtherStringDataString = typeof otherStringData.map === "string";
    // console.log(isStringDataString);
    // console.log(isOtherStringDataString);
    if (isStringDataString || isOtherStringDataString) {
        // console.log("string");
        if (isStringDataString && isOtherStringDataString && stringData.map === otherStringData.map) return 1;
        return 0;
    }


    // console.log("main" + otherStringData.id);
    //find smaller string (optimization)
    let smaller = stringData;
    let larger = otherStringData;
    if (otherStringData.map.size < stringData.map.size) {
        smaller = otherStringData;
        larger = stringData;
    }


    //find the total number of matches
    let matches = 0;
    for (let [key, value] of smaller.map) {
        if (larger.map.has(key)) {
            const count = larger.map.get(key);
            matches += Math.min(count, value);
        }
    }

    //calculate the percentage match
    const avgStringSize = (stringData.map.size + otherStringData.map.size) / 2;
    return matches / avgStringSize;
}


const AcceptedThreshold = 0.5;
const NewTagThreshold = 0.5;

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
        if (percentage >= AcceptedThreshold) {
            results.push({id: item.id, percentage})
            if (percentage > highestPercentage) highestPercentage = percentage;
        }
    });
    const createNewTag = highestPercentage <= NewTagThreshold;
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
    const finalResults = new Set();
    const possibleNewTags = new Set();
    stringData.forEach(data => {
        const {results, createNewTag} = KeywordCoefficient(data, tags);
        results.forEach(match => {
            confidence += match.percentage;
            finalResults.add(match.id);
        });
        if (createNewTag) possibleNewTags.add(data);
    });
    confidence /= finalResults.size;
    return {confidence, results: finalResults, possibleNewTags};
}


export default Coefficient;