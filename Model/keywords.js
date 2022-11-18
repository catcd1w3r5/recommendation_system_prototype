import {keywords} from "../Database/index.js";

const getKeywords = () => {
    return keywords;
}
/**
 *
 * @param data {StringData}
 * @returns {number}
 */
const addKeyword = (data) => {
    const id = keywords.length;
    const dictionary = data.dictionary;
    const character = data.character;
    if (dictionary !== undefined) keywords.push({id, dictionary});
    else keywords.push({id, character});

    return id;
}


export {getKeywords, addKeyword};
