/*
map sama seperti object cuma mengizinkan key dengan tipe apapun, ga cuma string/simbol

*/
const mymap = new Map([
    ['1', 'a string'],
    [1,'a number'],
    [true, true]
]);

//getting value and adding key-value using get() and set()

const capital = new Map([
    ["jakarta", "indonesia"],
    ["london", "england"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("london"));

capital.set("new delhi", "India");
console.log(capital.size);