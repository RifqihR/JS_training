//array deconstruction

const favorites = ["seafood","Salad","Nugget","soup"];
const [firstfood, secondfood, thirdfood, fourthfood] = favorites;
const [,thesecond]= favorites;
console.log(firstfood);
console.log(thesecond);

let myfood = "chocolate";
[myfood] = favorites;
console.log(myfood);

//swapping values

let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a);

//default value
