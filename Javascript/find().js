const myarray = ["cat", "dog", "lion", "parrot"];

function islength(string){
    return string.length === 3;
}

const  ans= myarray.find(islength);
console.log(ans);











const products= [
    { productId: 1, productName: "p1", price :400},
    { productId: 2, productName: "p2", price :200},
    { productId: 3, productName: "p3", price :700},
    { productId: 4, productName: "p4", price :300},
    { productId: 5, productName: "p5", price :100},
    { productId: 6, productName: "p6", price :800},

    { productId: 7, productName: "p7", price :500}
]


const findPrice = products.find((product)=>product.price=300);
 console.log(findPrice);