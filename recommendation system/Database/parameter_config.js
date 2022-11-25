//Database table doesnt exists, this is a mockup

export class ParamConfigStructure {
    constructor(id, weights, threshold, created_at) {
        this.id = id;
        this.name = name;
        this.threshold = threshold;
        this.weights = weights;

        //not sure if this is needed
        this.created_at = created_at;
    }
}

// Accurate data from the database
/**
 *
 * @type {ParamConfigStructure[]}
 */
const data = [
    new ParamConfigStructure(1, 1, 2),
    new ParamConfigStructure(2, 1, 2),
];

const Table = {
    ParamConfigStructure,
    data
}

export default Table;
