//Database table doesnt exists, this is a mockup

export class ListingParamValueHashStructure {

    /**
     *
     * @param listing {number}
     * @param parameter {number}
     * @param hash {number}
     * @param updated_at {string}
     * @param created_at {string}
     */
    constructor(listing, parameter,hash,updated_at, created_at) {
        this.listing = listing;
        this.parameter = parameter;
        this.hash = hash;
        //don't really care about this but ill keep it for parity
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}

// Accurate data from the database
/**
 * @type {ListingParamValueHashStructure[]}
 */
const data = [
];

const Table = {
    ListingParamValueHashStructure,
    data
}

export default Table;
