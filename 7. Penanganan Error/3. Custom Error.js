//custom error dibuat dengan membuat class error yang dapat dipanggil pada instanceOF\

class ValidationError extends Error {
    constructor(message) {
        super(message); //<---------memiliki construc message yang akan ditampilkan
        this.name = "ValidationError";
    }
}

// pemanggilan class error

let json = '{ "age": 30 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new ValidationError("'name' is required."); //<---------- pemanggilan class error
    }
    
    console.log(user.name);
    console.log(user.age);
    
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}