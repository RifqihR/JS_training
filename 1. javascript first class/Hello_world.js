//first code
/* lot line*/
//console.log('Hello wolrd');
//console.log('"he think it\'s awesome!"as he laught to the boy');

//macam variable var, let, const
//var banyak bug, use let and const ------> const ga bisa dibuah
let first_name = "my";
let mid_name;
mid_name="you";
let full_name = first_name +" "+mid_name;
console.log(`my name is ${full_name}`);


//datatype --same with python except bignumber, max value is -(2^53-1) to (2^53-1). to have more, add "n" after the nuber
const bignumber = 11929139812938895712984791274918274981247984n;
//let can contain bollean
let x = true;
let isgreater = 10 > 20;
//null value can be used
let my = null;
//create symbol, 2 symbol with same name still different
let somesymbol = symbol('e2');


//comparing value. "==" for value only. "===" for value and datatype
const astring = '10';
const anubmer = 10

console.log(astring==anubmer);
console.log(astring===anubmer);