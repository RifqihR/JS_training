//how to use promise

const stock = {
    coffeeBeans: 250,
    water: 1000,
}// data that want to be used
 
const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve("Stok cukup. Bisa membuat kopi");
        } else {
            reject("Stok tidak cukup");
        }
    });
};//promise object and function
 
const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}//resolve code
 
const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}//rejection code
 
checkStock().then(handleSuccess, handleFailure); //calling the promise (using .then)

// on rejection can also be used using .catch to separate resolve and rejection
checkStock()
    .then(handleSuccess)
    .catch(handleFailure)
