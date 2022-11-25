//Database table already exists, this is just for reference

export class ListingTypeStructure {
    constructor(id, name, created_at) {
        this.id = id;
        this.name = name;

        //don't really care about this but ill keep it for parity
        this.created_at = created_at;
    }
}

// Accurate data from the database
const data = [
    new ListingTypeStructure(1, "BUY", "2022-11-19 09:59:08.043214+00"),
    new ListingTypeStructure(2, "SELL", "2022-11-19 09:59:11.871034+00"),
];

const Table = {
    ListingTypeStructure,
    data
}

export default Table;
