function character(name){

this.name = name;
this.race;
this.color;
this.relationship = false
this.getInfo = getCharacter
}

//function getCharacter(){
	//return this.name + " " + this.race + " " + this.color + " " + this.relationship;
//}

function getCharacter(){
	return "Once upon a time, it was a dark and stormy night down at Midtown, Newyville. " + Deziah.name +" was in her dorm studying for her exam on Tuesday."
}

let Deziah = new character("Deziah Gayle");
Deziah.color = "pink";
Deziah.race = "Black";
Deziah.relationship = true;

let Jazmine = new character("Jazmine Jackson");
Jazmine.color = "blue";
Jazmine.race = "Asian";
Jazmine.relationship = false;

console.log(Deziah.getInfo());
console.log(Jazmine.getInfo());

let person = {firstName: "Lanny", isHappy: false, age: 19, hairColor: "black"};
console.log(person.firstName +  person.age) 