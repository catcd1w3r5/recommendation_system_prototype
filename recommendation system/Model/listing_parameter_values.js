import listing_parameter_values from "../Database/listing_parameter_values";

/**
 *
 * @param listingId {number}
 * @returns {ListingParamValueStructure[]}
 */
export const getListingParameterValues = (listingId) => {
    return listing_parameter_values.data.filter(listing_parameter_value => listing_parameter_value.listing === listingId);
}
