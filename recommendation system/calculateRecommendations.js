import {ListingStructure} from "./Database/listing";
import {ParamStructure} from "./Database/parameters";
import {ListingParamValueHashStructure} from "./Database/listing_parameter_values_hash";
import {ListingParamValueStructure} from "./Database/listing_parameter_values";
import {getListingByCategory} from "./Model/listing";
import {getParameters} from "./Model/parameters";
import {getListingParameterValues} from "./Model/listing_parameter_values";
import {getDatatype} from "./Model/datatype";
import {addListingParamValueHash, getListingParamValueHashes} from "./Model/listing_parameter_values_hash";
import {getParameterConfig} from "./Model/parameter_config";

/**
 *
 * @param listing {ListingStructure}
 * @returns {Promise<void>}
 */
const HashRecommendation = async (listing) => {
    const listingParameters = getListingParameterValues(listing.id);
    const params = getParameters();
    const listingHashes = listingParameters.map((listingParameter, index) =>
        calculateParameterHash(listing, index, params[listingParameter.parameter], listingParameter)
    );

    addListingParamValueHash(listingHashes);
}

/**
 *
 * @param listingID {number}
 */
const calculateRecommendations = (listingID) => {
    const paramConfigs = getParameterConfig();
    const listings = getListingByCategory(listingID);
    const params = getListingParamValueHashes(listingID);
    listings.filter(listing => {
        const listingParams = getListingParamValueHashes(listing.id);
        //find overlapping params via paramID
        const overlappingParams = listingParams.filter(listingParam => params.find(param => param.parameter === listingParam.parameter));
        //calculate score
        const score = overlappingParams.reduce((acc, param) => {
            const paramHash = params.find(paramHash => paramHash.parameter === param.parameter);
            const listingHash = listingParams.find(listingHash => listingHash.parameter === param.parameter);
            const paramConfig = paramConfigs[param.parameter];

            //get higher hash
            const higherHash = paramHash.hash > listingHash.hash ? paramHash.hash : listingHash.hash;
            //get lower hash
            const lowerHash = paramHash.hash < listingHash.hash ? paramHash.hash : listingHash.hash;

            //get %match
            const match = lowerHash / higherHash;
            if (match + paramConfig.threshold < 1) return acc;

            //get score
            const score = match * paramConfig.weights;

            //todo account for datatype

        });
    });
}

/**
 *
 * @param listing {ListingStructure}
 * @param parameterID {number}
 * @param param {ParamStructure}
 * @param paramValue {ListingParamValueStructure}
 * @returns {ListingParamValueHashStructure}
 */
const calculateParameterHash = (listing, parameterID, param, paramValue) => {
    //get datatype of parameter
    const dataType = getDatatype(param.datatype);
    switch (dataType) {
        case "string":
            return calculateParameterScoreString(listing, parameterID, param, paramValue);
        case "number":
            return calculateParameterScoreNumber(listing, parameterID, param, paramValue);
        case "boolean":
            return calculateParameterScoreBoolean(listing, parameterID, param, paramValue);
    }
}

const calculateParameterScoreString = (listing, parameterID, param, paramValue) => {
    // hash the string in such a way that similar strings will have similar hashes

    // no idea how to do this
    // all strings are hashed to 0 for now
    // probably won't break anything just, its just optimizations anyway
    return new ListingParamValueHashStructure(listing.id, parameterID, 0, "null", "null");
}

const calculateParameterScoreNumber = (listing, parameterID, param, paramValue) => {
    const hash = parseInt(paramValue.value)
    return new ListingParamValueHashStructure(listing.id, parameterID, hash, "null", "null");
}


const calculateParameterScoreBoolean = (listing, parameterID, param, paramValue) => {
    const hash = paramValue.value === "true" ? 1 : 0;
    return new ListingParamValueHashStructure(listing.id, parameterID, hash, "null", "null");
}
