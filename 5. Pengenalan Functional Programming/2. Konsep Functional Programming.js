//1. Pure Function---------------------------------------------->>
// fungsi tidak membutuhkan nilai dari luar fungsi
// fungsi tidak boleh mengubah nilai yang berada diluar baik secara sengaja atau tidak
//
// Impure Function karena membutuhkan nilai dari luar fungsi-------->>>>
let PI = 3.14

const keliling = (jarijari) =>{
    return PI* (jarijari*jarijari);
}

//pure funstion
const luaslingkaran = (jarijari) =>{
    return 3.14 * (jarijari*jarijari);
}

// Impure karena funsgi yang merubah nilai diluar
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
  };
  
  const person = {
    name: 'Bobo'
  };
  
  const newPerson = createPersonWithAge(18, person); //<-------- merubah nilai person


  // Pure form
  const createPersonWithAge2 = (age, person2) => {
    return { ...person2, age };
  };
  
  const person2 = {
    name: 'Bobo'
  };
  
  const newPerson2 = createPersonWithAge2(18, person2);


  //2. Immutability
  //objek tidak boleh dirubah setelah dibuat
  const PersonWithAge = (age, person) => {
    return { ...person, age };
  };
  
  const newperson = {
    name: 'Bobo'
  };