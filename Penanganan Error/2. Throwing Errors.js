// memberikan peringatan kesalahan/error apabila sistem tidak menganggab adanya error.
//seperti adanya variable yang kosong yang seharusnya terisi.

//1. Throw--> untuk memberikan pesan error pada sebuah operasi try and catch
let json = '{ "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    console.log(user.name); // undefined
    console.log(user.age);  // 20
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}


//2. menagnani error berdasarkan jenis error denagn if else dan instanceOF

try {
    // ...
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}