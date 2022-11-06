//set --> kumpulan nilai. data dalam set bersifat unik dan tidak  ada duplikasi.

const numberset = new Set([1,2,3,3,2,4,5]);

console.log(numberset); //-----> will not display same value

//adding value using add()
numberset.add(5);
numberset.add(6);
numberset.delete(1); //---> 1 is the value that want to be deleted, not the index cuz set doesnt have index

console.log(numberset);