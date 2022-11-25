//Database table already exists, this is just for reference

export class ParamStructure {
    constructor(id, name, displayName, type, datatype, updated_at, created_at, active) {
        this.id = id;
        this.name = name;
        this.displayName = displayName;
        this.type = type;
        this.datatype = datatype;
        this.active = active;
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}
/**
 * @type {ParamStructure[]}
 */
// Accurate data from the database (updated_at and created_at are not accurate because no point copying them exactly since they are not used)
const data = [
    new ParamStructure(1, "Length (Long Medium Short)", "Length", 4, 1, "2022-11-22 09:35:42.738717+00", "2022-11-22 09:35:42.738717+00", true),
    new ParamStructure(2, "Length (Measurement type)", "Length", 4, 2, "2022-11-22 09:35:42.738717+00", "2022-11-22 09:35:42.738717+00", true),
    new ParamStructure(3, "test", "test", 1, 1, "2022-11-22 09:35:42.738717+00", "2022-11-22 09:35:42.738717+00", true),
];

const Table = {
    ParamStructure,
    data
}

export default Table;
