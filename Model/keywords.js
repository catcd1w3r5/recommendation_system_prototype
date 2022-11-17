import {keywords} from "../Database/index.js";

const getKeywords = () => {
    return keywords;
}
const addKeyword = (data) => {
    data.id = keywords.length;
    keywords.push(data);
    return data.id;
}


export {getKeywords,addKeyword};
