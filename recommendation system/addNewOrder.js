import listing from "./Database/listing";
import {addListing} from "./Model/listing";

const addNewOrder = (id, name, description, price, unit_price, negotiable, category, type, updated_at, created_at, open, visibility, active) => {
    const newListing = new listing.structure(id, name, description, price, unit_price, negotiable, category, type, updated_at, created_at, open, visibility, active);
    addListing(newListing);
}
