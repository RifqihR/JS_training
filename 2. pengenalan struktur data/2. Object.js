//object is just like dictionary
//const character = {key1: value, key2: value2, etc};
//key must string, followed with ":"

const user = {
    nama: "rfiqi", 
    age: 12, 
    gender: "male",
    high: 25
};
console.log(user.age);

//inputing to object
user.nama = "hanif";
user["age"] = 23;
console.log(user.nama);
console.log(user.age);

//adding value
user.weight = 70
console.log(user)

//deleting variable on object
delete user.high;
console.log(user)