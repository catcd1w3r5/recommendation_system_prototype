import listing_parameter_values_hash from "../Database/listing_parameter_values_hash";

/**
 *
 * @param listingId {number}
 * @returns {ListingParamValueHashStructure[]}
 */
export const getListingParamValueHashes = (listingId) => {
    return listing_parameter_values_hash.data.filter(listing_parameter_value => listing_parameter_value.listing === listingId);
}

/**
 *
 * @param listingParamValueHashes {ListingParamValueHashStructure[]}
 */
export const addListingParamValueHash = (listingParamValueHashes) => {
    listing_parameter_values_hash.data.push(...listingParamValueHashes);
}
