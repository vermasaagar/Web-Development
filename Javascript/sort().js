
//sort() mehod

// const number = [3,5,6,73,23,43,2];
// number.sort();
// console.log(number); //sort as a string



// const username = ["Sagar", "Rishu", "krishna"];
// username.sort();
// console.log(username);



// Product


const products= [
    { productId: 1, productName: "p1", price :400},
    { productId: 2, productName: "p2", price :200},
    { productId: 3, productName: "p3", price :700},
    { productId: 4, productName: "p4", price :300},
    { productId: 5, productName: "p5", price :100},
    { productId: 6, productName: "p6", price :800},

    { productId: 7, productName: "p7", price :500}
]

//low to high

const lowtohigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
});

console.log(lowtohigh);

// high to low
const hightolow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
});

console.log(hightolow);