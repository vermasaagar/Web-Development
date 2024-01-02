// important array methods
//forEach
//map
//
//



const num = [4,2,5,6,7];


function mul(number, index) {
    console.log("index is : ",index);
    console.log(`${number}*2= ${number*2}`);

}

// mul(num[0], 0);
// mul(num[1], 1);
// mul(num[2], 2);
// mul(num[3], 3);


// for(var i=0; i<num.length; i++){
// mul(num[i], i);
// }



num.forEach(mul);




console.log("anonymous function");


num.forEach(function(number, index){

    console.log(`index is ${index} and number is ${number}`)
});


// realistic example forEach()

console.log("Another example")

const users = [
    {firstName: "Saroj", age:23},
    {firstName: "Satish", age:23},
    {firstName: "rishu", age:23},
    {firstName: "rishabh", age:23}

]


// 1 > users.forEach(function(users){
//     console.log(users.firstName);
// });  or another method let user of users


//2>

for(let user of users){
    console.log(user.firstName);
}

//Arrow function
//3>

console.log("Arrow function")

users.forEach(user => {
    console.log(user.firstName);
})

