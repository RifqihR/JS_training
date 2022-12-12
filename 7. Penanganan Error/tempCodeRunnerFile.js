function validateNumberInput (e,f,g){
    if (isNaN(e)){
        throw new ValidationError('"Argumen pertama harus number"');
    }
    if (isNaN(f)){
        throw new ValidationError('"Argumen kedua harus number"');
    }
    if (isNaN(g)){
        throw new ValidationError('"Argumen ketiga harus number"');
    }
}