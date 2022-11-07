//basic function
function multiplay(a,b){
    return a*b;
}

//another aplication
const user = {
    id: 24,
    displayname: "karen",
    fullname: "full karen",
};

function introduce({displayname, fullname}){
    console.log(`${displayname} is ${fullname}`);
};

//input bisa tidak disi + bisa diberikan default nilai

function expo(baseformula, exponent =2){
    let result = baseformula**exponent;
    console.log(result);
};

//rest parameter, the oposite of spread operator, menghubungkan bberapa elemen menjadi satu
function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result += number;
    };
};

console.log(sum(1,2,3,4,5,6,7,8,9,10));