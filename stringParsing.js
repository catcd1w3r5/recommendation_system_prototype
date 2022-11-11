import StringData from "./stringData.js";

/**
 * @param str {string}
 * @returns {StringData}
 */
const parseSubstring = str => {
    if (str.length === 1) return parseChar(str);
    const dict = new Map();
    for (let i = 0; i < str.length - 1; i++) {
        const subStr = str.substring(i, i + 2);
        const count = dict.has(subStr)
            ? dict.get(subStr) + 1 : 1;

        dict.set(subStr, count);
    }
    const data = new StringData();
    data.map = dict;

    return data;
    // returns a dictionary of all the substrings and their counts
    // might not be optimal
}
const parseChar = str => {
    const char = str.charAt(0);
    const data = new StringData();
    data.map = char;
    return data;
}

export {parseSubstring};