/* for(inisialisai vairable; konsidi; perubahan nilai){
        do-something
}*/

for(let i = 0; i < 5;i++){
    console.log(i)
}

//for in array

let myarray = [1,"cyndy",3,"haikal",5,6];

for(const arrayitem of myarray){
    console.log(arrayitem)
}

//while-do loop
let n = 1;

while (n<5){
    console.log(n);
    n++;
}

n = 0;
do {
    console.log(`itteration ${n}`);
    n++;
} while (n<5);

/*invinite loop
while(true){
}*/