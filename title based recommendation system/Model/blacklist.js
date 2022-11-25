import {blacklist} from "../Database/index.js";

//won't change often, caching is possible
/**
 *
 * @returns {string[]}
 */
const getBlacklist = () => {
    return blacklist;
}

export {getBlacklist};
