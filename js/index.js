const item = [{name: 'Bike', price:100}, {name: 'TV', price:200}, {name: 'Album', price:10}, {name: 'Book', price:5}, {name: 'Phone', price:500}, {name: 'Computer', price:1000} ];

// filtering cheap objects
// Consider that a price more than 200 is an expensive item
function cheapItems(ite) {
    if (ite.price <= 200) {
        return ite;
    }
}

//as we considered that price over 200 is expensive
function expensiveItems(ite) {
    if (ite.price > 200) {
        return ite;
    }
}

//The total price of all items none excluded
const total = item.reduce((amount, ite) => {
    return ite.price + amount;
    
}, 0);

//The total price of all items excluding 
// item with price less than 10 dollar
const totalOverTen = item.filter((ite) => {
    return ite.price > 10;
}).reduce((amount, ite) => {
    return ite.price + amount;
}, 0)

console.log("Cheap items:");
console.table(item.filter(cheapItems));
console.log("\nExpensive items:");
console.table(item.filter(expensiveItems));
console.log("\nTotal price:");
console.log(total);
console.log("\nTotal price of items of 10 dollar:");
console.log(totalOverTen + "\n");