
const READLINE = require("readline-sync");

let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: undefined,
  item: "high powered flashlight",
  courage: 90,
  intellect: 990,
  strength: 888,
  charm: 7000,
  powers: undefined

  };
 console.log();

  console.log("*** WELCOME TO THE WITCH'S HOUSE  ***");

  player.name = READLINE.question("What is your name?");
  weapon = READLINE.question("what is your weapon of choice?")


 console.log(`${player.name} stands in front of a spooky WITCH'S HOUSE.`);
  console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
  let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
  if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);

 } else {
  player.intellect++;
  
  console.log(`${player.name} decides not to open the door, ${player.name} sees that he/she would have died by the trap the Witch set`);
 }

  console.log("Thanks for playing level 1!");

 console.log("You did it!");
 console.log("WELCOME to level 2!")
 console.log("So now the WITCH has two poor kids")
 player.power = READLINE.question("which power? (glitter bombs or time control) " );


 if(player.power == "glitter bombs"){
  console.log("the Witch is blinded by the glitter, giving you enough time to grab the kids and bounce")
}


 if(player.power == "time control") {
  console.log("you stop time and grab the poor kids and leave the Witch")
}

 console.log("sadly the Witch has the kids in the next level.")
 console.log(`${player.name} says 'so the kids i grabbed were fake!!! what the heck, all that hardwork and i have to go up a floor XO why?'`)

 console.log("Thanks for playing level 2")

 console.log("WELCOME to level 3")


