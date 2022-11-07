//variant of map yang mendukung garbage collection(interpreter mengambil kembali memori yang tidak lagi dapat dijangkau dan tidak dapat digunakan oleh program)
//weak dalam weakmap adalah referensi terhadap nilai yang disimpan. apabila nilai yang disimpan sudah tidak terjangkau. maka referensi ke memorinya akan dihapus

//map biasa
let visitCountMap = new Map();

function counteruser(user){
    let count = visitCountMap.get(user) || 0;
    visitCountMap.set(user, count + 1 );
}

let jonas = {name: "jonas"};
counteruser(jonas);

jonas = null; //-->mencoba menghapus nilai jonas

setTimeout(() => {
    console.log(visitCountMap); //--> nilai jonas akan tetap ada. harus benar benar dihapus
}, 10000);

//weakmap
const { inspect } = require('util');
let visitcountweakmap = new WeakMap();

function countUser(user) {
    let count = visitcountweakmap.get(user) || 0;
    visitcountweakmap.set(user, count + 1);
}

let akbar = {nama: "akbar"};
countUser(akbar);

akbar = null;
setTimeout(() => {
    console.log(inspect(visitcountweakmap, {showHidden: true})); //--> 1) nilai weakmap tidak dapat dilihat secara langsung(use inspect) nilai akbar akan terhapus
}, 10000); //-->dibutuhkan untuk membeirkan waktu kerja pada garbage collector

//weakmap tidak termaksud kategori iterable, tidak bisa menggunakan method key(), values(), atau forEach()