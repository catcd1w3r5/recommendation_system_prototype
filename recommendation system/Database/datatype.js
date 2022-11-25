//Database table already exists, this is just for reference

export class DataTypeStructure {
    constructor(id, name, created_at) {
        this.id = id;
        this.name = name;

        //don't really care about this but ill keep it for parity
        this.created_at = created_at;
    }
}

// Accurate data from the database
const data = [
    new DataTypeStructure(1, "STRING", "2022-11-19 10:47:34.119249+00"),
    new DataTypeStructure(2, "NUMBER", "2022-11-19 10:47:39.0411+00"),
    new DataTypeStructure(3, "BOOLEAN", "2022-11-19 10:47:49.345389+00")
];

const Table = {
    DataTypeStructure,
    data
}

export default Table;
