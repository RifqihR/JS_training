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


////high ourder function---> can create array map() sendiri
const name = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}

const newName = arrayMap(names, (name) => `${name}!` );