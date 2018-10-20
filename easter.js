// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// Write your program below!
// First line should get user input (year) and store it in variable y.
let y=2003;

let a=y % 19;
let b=y/100;
let c=y % 100;
let d=b/4;
let e=b % 4;
let f=(b+8)/25;
let g=(b+f-1)/3;
let h=(19*a+b-d-g+15)%30;
let I=c/4;
let k=c % 4;
let r=(32+2*e+2*1-h-k)%7;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(I)
console.log(k)
console.log(r)
//console.log(d)





