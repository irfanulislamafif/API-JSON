
console.log("Explore API");
const person = {
  name: "selim",
  fruit: "dalim",
  dish: "halim",
  friends: ["alim", "kolim", "lamim"],
  isRich: false,
  money: 340000,
};

console.log(person);

// JSON --> JS object with Notation
// JSON.stringify
const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON, typeof parseJSON);
