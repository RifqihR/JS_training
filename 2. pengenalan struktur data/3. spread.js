//spread (...array) is similar to array[0]---array[n]
//can also be used in joining 2 object >>> const newobj = {...obj1, ...obj2};

const favorites=["pecel", "lele", "gerprek"];
console.log(...favorites);

const ary1 = [1,2,3,4,5];
const ary2 = [6,7,8,9,10];

const aryjoin = [...ary1,...ary2];
console.log(aryjoin);