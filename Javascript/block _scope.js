


// //block scope vs function scope
// // let and const are block scope   block ke bahr variable ko access nhi kr saktey 
// // var is function scope // block ke bahr variable ko accesss kr saktey hai

// {
//     let firstname="sagar";
// }

// console.log(firstname);





// {
//     const name="sagar";
// }

// console.log(name);







// {
//     var name="sagar";
// }

// console.log(name);







//default parameter


// function addTwo(a,b){
//     if(typeof b === "undefined"){
//         b=0;
//     }
//     return a+b;
// }



//default parameter
// function add(a,b=9){
//     return a+b;

// }

// const ans = add(4);
// console.log(ans);



// rest parameter


function myfunc(a,b,...c){

    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);

}

myfunc(3,4,5,6,7,8);