//1: find the square root of each elemnet in an array


// let arr = [ 25, 36, 49, 64, 81];
// // Math.sqrt() to find find the square root of each elemnet in an array
// let arrSqrt = arr.map((currEle) => {
//     return Math.sqrt(currEle);
// })

// console.log(arrSqrt); 

// 2: multiply each elemnet by 2 and return only those elements which are greater than 10?

// let arr1 = [ 2, 3, 4, 5, 6, 7];
// let arr2 = arr1.map((currEle) => currEle * 2
// ).filter((currEle) => currEle > 10).reduce((accumulator, currEle, index, arr) => 

//     accumulator += currEle);

//    console.log(arr2);


//or
// 3 subj marks are given [5,6,7]= 1 subj marks is =9


   let arr1 = [ 5, 6, 7];
let arr2 = arr1.map((currEle) => currEle * 2
).filter((currEle) => currEle > 10).reduce((accumulator, currEle, index, arr) => 

    accumulator += currEle, 9);

   console.log(arr2);







