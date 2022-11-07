//sama seperti functio cuma beda penulisan

const sayName = (name) =>{
    console.log(`nama saya ${name}`);
};


//-->jika hanya 1 parameter dapat ditulis tanpa tanda kurung<--
const saymyName = name =>{
    console.log(`nama saya ${name}`);
};

//-->jika tidak perlu parameter, cukud ditulis tanda kurung saja<--
const sayname = () =>{
    console.log(`nama saya bayu}`);
};

//-->jika body function hanya 1 line saja, kurung kurawal bisa dihilangkan, dan bisa tidak menulis return apabila fungsi perlu mengambil nilai<--
const grettings = () => console.log('selamat pagi');

const multiply = (a, b) => a*b;
console.log(multiply(3,4));
