//if else
const flag = true;
if (flag) {
    console.log('do here');
} else {
    console.log('doit');
}
//2
const nilai = 10;
if (nilai<50) {
    console.log('remidi');
}else if (nilai<80) {
    console.log('good');
}else {
    console.log('great');
}

//switch
let language = 'english';
let greeting = null;
switch (nilai){
    case 'english':
        greeting = 'good morning';
        break;
    case 'sunda':
        greeting = 'sunda';
        break
}