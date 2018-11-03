const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 12,
  intellect: 100,
  strength: 90,
  charm: 150,
  weapon: "death sycthe",
  item: "high flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares her ${player.weapon} and opens the door...`);
  // continue the story
  console.log(`${player.name} as soon as ${player.name} steps into the room`)
console.log(`${player.name} is attacked by the guard dog of hades. Cerberus!!! `)
console.log(`${player.name} screams 'why!? why must it be me?!'`)






} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
