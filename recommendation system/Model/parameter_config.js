import paramConfigs from "../Database/parameter_config";

/**
 * @returns {ParamConfigStructure[]}
 */
export const getParameterConfig = () => {
    return paramConfigs.data;
}
