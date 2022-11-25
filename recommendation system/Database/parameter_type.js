//Database table already exists, this is just for reference

export class ParamTypeStructure {
    constructor(id, name, created_at) {
        this.id = id;
        this.name = name;

        //don't really care about this but ill keep it for parity
        this.created_at = created_at;
    }
}

// Accurate data from the database
const data = [
    new ParamTypeStructure(1, "MEASUREMENT (WEIGHT)", "2022-11-19 10:48:58.525144+00"),
    new ParamTypeStructure(2, "MEASUREMENT (DIMENSION)", "2022-11-19 10:49:10.142611+00"),
    new ParamTypeStructure(3, "TWO CHOICES", "2022-11-19 10:49:18.334194+00"),
    new ParamTypeStructure(4, "MANY CHOICES", "2022-11-19 10:49:23.864077+00"),
    new ParamTypeStructure(5, "OPEN ENDED", "2022-11-19 10:49:29.112018+00")
];

const Table = {
    structure: ParamTypeStructure,
    data
}

export default Table;
