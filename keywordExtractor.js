import {parseSubstring} from "./stringParsing.js";

/**
 * @param str {string}
 * @returns {Set<string>}
 */
const extract = str => {
    const subStrings = str.toLowerCase().split(" ");
    const dataSet = new Set();
    for (let i = 0; i < subStrings.length; i++) {
        dataSet.add(parseSubstring(subStrings[i]));
    }
    return dataSet;
}



export default extract;