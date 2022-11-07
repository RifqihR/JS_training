//terdapat globally scoped variable dan localy scoped variable

const globalvar ='this is globally scoped variable'

function Init(){
    let localvar = "this is local variable"
}

//can use same variale

let total = 9;

let multiply = (num) =>{
    let total = num*num; //-->jangan lupa deklarasi variable lagi.
    return total;
}

console.log(multiply(9));