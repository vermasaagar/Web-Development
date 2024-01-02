

// //const myfunction = power => number => number ** power
// const myfunction = (power) =>{
//     return function(number){
//         return number ** power;
//     }
// }

// const square = myfunction(2);
// const ans = square(3);
// console.log(ans);


// const cube = myfunction(3);
// const ans2 = cube(3);
// console.log(ans2);




// const myfunc = func();

// myfunc();
// myfunc();

function func(){
    let counter = 0;
    return function(){
        if (counter<1){
            console.log("hi you called me");
            counter++;
        }
        else{
            console.log("Already called");
        }
    }
}
const myfunc = func();
myfunc();
myfunc();

const myfunc2 = func();
myfunc2();
myfunc2();