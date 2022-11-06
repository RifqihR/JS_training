let myarray = ["me", 2, 3, 4,"male"];
console.log(myarray);
console.log(myarray[1]);

//adding data from behind using push
myarray.push('javascript');

//deleting data from behind using pop
myarray.pop();

//adding data from front
myarray.unshift('data baru');

//deleting data form front
myarray.shift();

//deleting certain element
delete myarray[1];

//deleting many element
myarray.splice(2,1) //delete 1 element from index 2 
