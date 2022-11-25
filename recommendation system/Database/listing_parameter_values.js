//Database table already exists, this is just for reference

export class ListingParamValueStructure {
    /**
     *
     * @param listing {number}
     * @param parameter {number}
     * @param value {string}
     * @param updated_at {string}
     * @param created_at {string}
     */
    constructor(listing, parameter,value,updated_at, created_at) {
        this.listing = listing;
        this.parameter = parameter;
        this.value = value;
        //don't really care about this but ill keep it for parity
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}

// Accurate data from the database
const data = [
];

const Table = {
    ListingParamValueStructure,
    data
}

export default Table;
