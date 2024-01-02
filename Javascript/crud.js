
// push() method----------------------------------




// console.log("push() method");
// const animals=['cat', 'dog', 'hen', 'elephant', 'zebra'];
// animals.push('Lion', 'cow', 'fish');
// // const count = animals.push('Lion', 'cow', 'fish');

// console.log(animals); 
// // console.log(count);


// unshift() method---------------------------------

// console.log("unshift() method");
// const animal=['cat', 'dog', 'hen', 'elephant', 'zebra'];
// animal.unshift('Lion', 'cow', 'fish');
// console.log(animal); 


// //  2nd example

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// numbers.unshift(10,20); 
// console.log(numbers);



// //pop() method-------------------------------------------

// console.log("pop() method");
// const plants = [ 'broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.pop());
// console.log(plants);



// // shift() method -------------------------------------

// console.log("shift() method");
// const plant = [ 'broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
// console.log(plant);
// console.log(plant.shift());
// console.log(plant);



// // splice() method-----------------------
// practice question
//1: Add dec at the  end of an array
//2: What is the return value of splice() method
//3: update mar to March ?
//4: Delete june from an array


// const months = ['Jan', 'Feb', 'mar', 'Apr', 'May'];
// const newMonths = months.splice(4,0,"Dec");
// //const newMonths = months.splice(months.length,0,"Dec");
// console.log(months);
// console.log(newMonths);// splice method show only delete element


// const updateMonths = months.splice(2,1,'March'); // update element element in the array
// console.log(months);


// const indexOfMonths = months.indexOf('Apr');  // it show index number  
// console.log(indexOfMonths);




// const months = ['Jan', 'Feb', 'mar', 'Apr', 'May'];
// const indexOfMonths = months.indexOf('Apr');

// if(indexOfMonths != -1) {
// const updateMonths = months.splice(indexOfMonths,1,'March');
// console.log(months); 

// }
// else{
//     console.log("not found");
// }








// const months = ['Jan', 'Feb', 'mar', 'Apr', 'May'];
// const indexOfMonths = months.indexOf('Apr');

// if(indexOfMonths != -1) {
// const updateMonths = months.splice(indexOfMonths,1); // it show deleted data
// console.log(months); 
// console.log(updateMonths);

// }
// else{
//     console.log("not found");
// }





const months = ['Jan', 'Feb', 'mar', 'Apr', 'May'];
const indexOfMonths = months.indexOf('mar');

if(indexOfMonths != -1) {
const updateMonths = months.splice(indexOfMonths,Infinity); // it show deleted data
console.log(months); 
console.log(updateMonths); // it show only deleted data

}
else{
    console.log("not found");
}
