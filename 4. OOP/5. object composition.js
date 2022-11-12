//prinsip komposisi dari sebuah alur bisnins tanpa perlu melakukan pewarisan dari parent class. aka menggunakan kumpulan method/function yang sudah didefinisikan tanpa inheritance

//step 1 : memisahkan funsgi-fungsi umum yang bisa digunakan
const yourgenericAction = params => ({
    actionA: () => {/*do action A*/},
    actionB: () => {/*do action B*/},
});

//step 2 : membuat class seperti biasa
//step 3 : menyimpan atribut dalam sebuah objek, biasanya pake variable self
const yourclassname = (paramA, ParamB) =>{
    const self = {
        paramA,
        ParamB
    };
// step 4 : menambah method/function yang hanya ada pada kelas tersebut
    const yourspecifiaction = self => ({
        specificactionA : {/*do something*/},
    });

//step 5 : membuat kumpulan atribut, generic method, dan spesifiksai method menjadi satu boject
    return Object.assign(self, yourgenericAction(self),yourspecifiaction(self))
}