

// var myName ="Sagar"
// console.log(myName);

// myName = "verma";
// console.log(myName);


// let myName ="Sagar"
// console.log(myName);

// myName = "verma";
// console.log(myName);


// cannot change constant variable
// const myName ="Sagar"
// console.log(myName);

// myName = "verma";
// console.log(myName);




// function scope

// function data() {
//     var myName = "Sagar";
//     console.log(myName);

//     if(true) {

//         var lastName = "verma";
//         console.log('inner' +lastName);
//         console.log('inner' + myName);

//     }

//     console.log('outer' +lastName);

// }
// data();// function call



// function data() {
//     let myName = "Sagar";
//     console.log(myName);

//     if(true) {

//         let lastName = "verma";
//         console.log('inner' +lastName);
//         console.log('inner' + myName);

//     }

//     console.log(myName); // because it is global block we cant access inner variable by using let and const keywords

//     // console.log('outer' +lastName); its show an error because let and const is block scope

// }

// data();// function call







// ---------3. Templates literals (templates stringd)


// for(let num=1; num<=10; num++)
// {
//     let tableOf = 12;

//     console.log(`${tableOf} * ${num} = ${tableOf*num}`);

// }



// fat arrow function 


const sum = () =>`sum is ${(a=5) + (b=6)}`; 
console.log(sum());