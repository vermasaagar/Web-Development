

let fruits = [ "mango","banana", "apple", "grapes"];



// for(let i=0; i<=fruits.length; i++)
// {

    
//     fruits.push("orange");
   

// }

// console.log(fruits[i]);

// fruits.push("orange");
// console.log(fruits);

// let i=0;
// while(i<=fruits.length)
// {
//     console.log(fruits[i]);
//     i++;
// }



// for of loop

// for(let fruit of fruits){
//     console.log(fruit)
// }

for(let index in fruits){
    console.log(index, fruits[index]);
}