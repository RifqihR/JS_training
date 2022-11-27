//>> penulisan gaya imperatif>>How to solve---------------------------------------------------------------
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

//>>penulisan gaya Deklaratif>> what to solve----------------------------------------------------------------
const nama = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNames = names.map((nama) => `${nama}!`);

console.log(newNames);

/* output kedua cara------------------------------------------------------------------------------------------
:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */