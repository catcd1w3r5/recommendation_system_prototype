import {parseSubstring} from "./stringParsing.js";
import {getBlacklist} from "./Model/index.js";

/**
 * @param str {string}
 * @returns {Set<string>}
 */
const extract = str => {
    const subStrings = str.toLowerCase().split(" ");
    const dataSet = new Set();
    subStrings.filter((item) => {
        //check against blacklist
        return !getBlacklist().includes(item);
    }).forEach((item) => {
        //remove duplicates
        dataSet.add(parseSubstring(item));
    });
    return dataSet;
}


export default extract;
