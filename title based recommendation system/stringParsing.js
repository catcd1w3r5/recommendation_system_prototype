import StringData from "./stringData.js";

/**
 * @param str {string}
 * @returns {StringData}
 */
const parseSubstring = str => {
    if (str.length === 1) return parseChar(str);
    const dict = {};
    for (let i = 0; i < str.length - 1; i++) {
        const subStr = str.substring(i, i + 2);
        dict[subStr] = dict[subStr] === undefined ? 1 : dict[subStr] + 1;
    }
    const data = new StringData();
    data.dictionary = dict;

    return data;
    // returns a dictionary of all the substrings and their counts
    // might not be optimal
}
const parseChar = str => {
    const char = str.charAt(0);
    const data = new StringData();
    data.character = char;
    return data;
}

export {parseSubstring};
