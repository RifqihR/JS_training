//breaking an object or array into smaller variable

//-------destructing object----

const profile = {
    firstname: "rifqi",
    lastname: "hanif",
    age: 23
}

//const {firstname, lastname, age, gender = "male"} = profile;
//gender one -->creating default value for when you have variable that doesnt belonge to the object
//console.log(firstname);

// destructing object into already declared variable

let firstname = "john";
let lastname = "small";
let age = 24

({firstname, lastname, age}= profile);
console.log(firstname);


//-->import into local variable
const {firstname: local1, lastname: local2, age: local3} = profile;
console.log(local3);