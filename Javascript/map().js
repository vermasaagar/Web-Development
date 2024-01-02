// map()
// reduce()
// filter()






console.log("map()");
const array1 = [1, 4, 9, 16, 32, 64,];
// num >9
//make new array always
let newArr = array1.map((curEle, index, arr) => {

    return curEle>9;
})

console.log(array1);
console.log(newArr);



// const array1 = [1, 4, 9, 16, 32, 64,] ;
// // num >9

// let newArr = array1.map((curEle, index, arr) => {

//     return `Index no = ${index} and the value is ${curEle} belong to ${arr}`})


// console.log(newArr);






// filter() method


let arr1 = [ 2, 3, 4, 5, 6, 7];
let arr2 = arr1.map((currEle) => currEle * 2
).filter((currEle) => currEle > 10);

   console.log(arr2);






   


// // 3: reduce() method


let arr = [ 1, 2, 3, 4, 5, 6, 7];
    let sum = arr.reduce((accumulator, currEle, index, arr) => {

        return accumulator += currEle;

    })
    console.log(sum);
