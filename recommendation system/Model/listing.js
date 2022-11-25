import listing from "../Database/listing";

export const getListing = (id) => {
    return listing.data[id];
}

/**
 *
 * @param category {number}
 * @returns {ListingStructure[]}
 */
export const getListingByCategory = (category) => {
    return listing.data.filter(listing => listing.category === category);
}

