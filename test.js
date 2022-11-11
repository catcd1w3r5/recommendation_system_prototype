import Coefficient from "./coefficient.js";
import extract from "./keywordExtractor.js";
import FakeDatabase from "./fakeDatabase.js";

const keywords = extract("bUying C Channels");
//limitations: strings must be at least 2 characters long
//filter out beforehand
const matches = Coefficient(keywords, FakeDatabase.keywords);

console.log(matches);

