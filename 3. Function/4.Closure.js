//fungsi didalam fungsi memiliki akses ke variable pada induknya

function init(){
    var name = 'obi wan';
    const greet = ()=> console.log(`hallo, ${name}`);
    greet();
}

//dapat ditulis seperti ini
function otherinit(){
    var name = 'obiwan';
    const greet = ()=> console.log(`hallo, ${name}`);
    return greet;
}

//program dengan closure agar variable dan fungsi didalamnya tidak dapat diubah dari luar/private
let add = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
}

let addCounter = add();

console.log(addCounter());