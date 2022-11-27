//fungsi yang dapat digunakan kembali karena tidak ada ketergantungan terhadap variable di luar fungsi

//1. Array Map()
//untuk menghasilkan array baru dengan nilai yang berbeda
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});
console.log(newArray);

//2. Array filter()
//memfilter array

//contoh 1
const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item)); //menghilangkan nilai yang bernilai false ('', 0, nul, dianggap false/kosong)
console.log(truthyArray);

//contoh 2
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  console.log(eligibleForScholarshipStudents);

  //3. Array reduce