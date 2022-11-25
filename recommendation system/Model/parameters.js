import parameter from "../Database/parameters";

/**
 *
 * @returns {ParamStructure[]}
 */
export const getParameters = () => {
    return parameter.data;
}
