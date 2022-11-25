//Database table already exists, this is just for reference

export class ListingStructure {
    constructor(id, name, description, price, unit_price, negotiable, category, type, updated_at, created_at, open, visibility, active) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.unit_price = unit_price;
        this.negotiable = negotiable;
        this.category = category;
        this.type = type;
        this.open = open;
        this.visibility = visibility;
        this.active = active;
        //don't really care about this but ill keep it for parity
        this.updated_at = updated_at;
        this.created_at = created_at;
    }
}

// Accurate data from the database (first 5 rows)
const data = [
    new ListingStructure(1,
        "Galvanised I-Beams",
        "Galvanised Universal Beams avoid premature rust and deterioration. It supplies benefits like lower repair & maintenance costs. The Universal beam contains two horizontal planes, known as flanges, attached by one upright component. The shape of the flanges, as well as the web, develop an ‘I’ or an ‘H’ cross-section. Universal beams can be found in a selection of section midst, flange sizes, as well as various other applications for various functions. Galvanized Universal Beams are rust-proof, have high strength, as well as offer optimal top quality for building & engineering applications.",
        100,
        false,
        true,
        2,
        1,
        "2022-11-20 13:39:05.791429+00",
        "2022-11-20 07:59:07.752905+00",
        true,
        true,
        false),
    new ListingStructure(2,
        "Stainless Steel I-Beams",
        "Stainless steel universal beams are specifically designed to achieve an “I” shape. The stainless steel beams are formed by welding two flat metal plates atop the strong supportive centre. The centre is called the web, which keeps the two plates (flanges) together, maintaining structural integrity and helps disperse pressure. The top and flat bottom steel pieces receive majority of the force and dissipate pressure equally throughout the beam. This provides excellent mobility and stability, particularly during strenuous movement.\n\nStainless steel I-beams are commonly used as building and construction materials due to their excellent structural integrity. They are frequently used as structural support in homes, bridges, shipbuilding and other heavy industrial applications. Stainless steel I-beams are resistant to corrosion, stains and rust making them suitable for various architectural applications.",
        200,
        false,
        true,
        2,
        1,
        "2022-11-20 13:39:05.791429+00",
        "2022-11-20 07:59:07.752905+00",
        true,
        true,
        true),
    new ListingStructure(3,
        "Aluminium I-Beams",
        "Aluminium Universal Beam, also known as, Aluminium I-Beam is an extruded aluminium bar formed in the shape of “I” that is used to distribute weight of walls and floors above an opening. Aluminium I-beams are commonly used for structural and highly stressed applications, where lightweight and corrosion resistance is a priority, such as bridges, overhead support, construction, civil engineering and other heavy machinery. Aluminium I-beam is mostly used to support heavy structures due to its capability to withstand heavy loads, primarily by resisting against bending.",
        300,
        false,
        true,
        2,
        2,
        "2022-11-20 13:39:05.791429+00",
        "2022-11-20 07:59:07.752905+00",
        true,
        true,
        true),
    new ListingStructure(4,
        "Stainless Steel Round Bar",
        "brand new\nclearing price",
        100,
        false,
        false,
        9,
        2,
        "2022-11-20 13:39:05.791429+00",
        "2022-11-20 07:59:07.752905+00",
        true,
        true,
        true),
    new ListingStructure(5,
        "FAST SELL Round Bar",
        "clearing stock fast, fast deal",
        80,
        false,
        false,
        9,
        2,
        "2022-11-20 13:39:05.791429+00",
        "2022-11-20 07:59:07.752905+00",
        true,
        true,
        true),
];
const Table = {
    ListingStructure,
    data
}

export default Table;


