

// var can be updated and can be redeclared
var a=10;
var a=20;
a=3;
console.log(a);




// let can be updated but cannot be redeclared
let b=10;
b=20;
console.log(b);



// const cannot be updated and cannot be redeclared
// const c = 10;
// c=20; // typed error
// console.log(c);


const profile = {
    username:"sagarverma",
    isfollow:true,
    followers:123,
    following:32
};

console.log(profile);
console.log(typeof profile["username"]);



// hoisting in js : accessing variable amd function before declaring it
// declaration hoisted to the top but initialization is not







greet()
function greet(){
    console.log("good morning");
}


// function expression and class expression is not hoisted this is the example of function expreesion 

greets()
var greets = () =>{
    console.log("good afternoon");
}


greetss()
var greetss = function(){
    console.log("good evening")
}





let num = prompt("enter a number");
if(num%5===0){
    console.log("Divisible by 5")
}
else{
    console.log("Number is not divisible by 5");
}



let score = prompt("Enter score of student");
if(score >= 80 && score <=100){
    console.log("A Grade");
}
else if(score >=70 && score <= 89){
    console.log("B Grade");
}

else if(score >=60 && score <= 69){
    console.log("C Grade");
}

else if(score >= 50 && score <= 59){
    console.log("D Grade");
}

else{
    console.log("F grade");
}


// for of loop is used to iterate string and array element

let str = "sagar";
for(let i of str){
    console.log("i = ", i);

}




for(let i=0; i<=100; i++){
    if(i%2===0){
        console.log(i);
    }
}



let gameNum = 25;
let userNum = prompt("Guess a number");

while(userNum != gameNum){
    userNum = prompt("Wrong value , guess again");
    
}

console.log("Congrats you guess right value");




let marks = [87, 82, 76, 65, 78];

// for(let index=0; index < marks.length; index++){
//     console.log(marks[index]);
// }

let total_marks = 0;
for(let i=0; i<marks.length; i++){
    total_marks = total_marks + marks[i];
   
}
let avg = total_marks/marks.length;
console.log(avg);



let price = [100, 200, 300, 400, 500];

let offer;
for(let i=0; i<price.length; i++){
   offer= price[i]*10/100;

    price[i] = price[i] - offer;
   
    console.log(price[i]);
}


let companies = [ "TCS", "Cognizant", "Capgemini", "minftree", "Infosis"];

// let remove = companies.shift();

let remove = companies.splice(2,1,"uber");
 let add  = companies.push("Amazon");
console.log(companies);





 // forEach loop in array

 let arr = ["pune", "mumbai", "banglore", "kolkata"];
 
 arr.forEach((val, ind, arr) => {
    console.log(val, ind, arr);
    // console.log(val.toUpperCase());
 
 });





 let arr = [1, 2, 3, 4, 5];

 arr.forEach((val)=>{
   let sqr = val*val;
    console.log(sqr);
 })


  


 // map method is similar to for each method but difference is that the map method is used to form new array
 // map method return arr element in the new array


 // filter : filter method is used to return even elememt thst give true for consition will be store in the newArr

 let arr = [ 3, 2, 5, 8, 6];
 
 let newArr = arr.filter((val)=>{
    if(val % 2  === 0){
       return val;

        
    }
    
   
   
 });
 console.log(newArr);


 // map method


 let mapp = [12, 13, 34, 43, 45, 46, 47];

 let num = mapp.map((val, index, arr) =>{
    console.log(val, index, arr);
 })





 //reduce method: return only single value example sum of number, or average 

 // perform some operation and reduce the array to single value. it return single



 // sum of all number
 let arr = [12, 13, 14, 15, 16, 17];

 const out = arr.reduce((result, curr)=>{
   return result + curr;
 });
 console.log(out);



 // to find the largest number
 let ar = [12, 13, 14, 15, 16, 17];

 const ou = arr.reduce((prev, cur)=>{
   return prev > cur ? prev : cur;
 });
 console.log(ou);

 // filter out that student who score more than 90


 let marks = [67, 76, 87, 89, 92, 93];

 let score = marks.filter((val)=>{
    if(val>90){
        return val;
    }
 });
 console.log(score);



 

let num = prompt("Enter a number");
let array = [];
 for(let i=1; i<=num; i++){
    array.push(i);
  
}
console.log(array);

let output = array.reduce((pre, curr)=>{
    return pre+curr;
});
console.log("Sum of array = ", output)




// let heading = document.querySelector("h2");
// heading.innerText= heading.innerText + " Apna College";
// console.log(heading);




let heading = document.createElement("h2");
heading.innerHTML="Welcome To Apna College!";
document.body.appendChild(heading);

let btn = document.createElement("btn");
btn.innerText ="Click Me!";
document.body.append(btn);

 


let btn = document.querySelector(".btn1");

btn.addEventListener("click", (evt) => {
    console.log("button was clicked");
    console.log(evt);

});



let mode = document.querySelector("#mode");
let currMode  = "light"; 
mode.addEventListener("click", ()=>{
    // console.log(" you are trying to change mode")
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor  = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor  = "white";
    }
    console.log(currMode);
});





const emp = {
    caltax(){
        console.log("tax rate is 10%");
    }
};


const karan = {
    salary:50000
};

karan.__proto__ = emp;





let data = "secret information"
class user {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    viewdata(){
        console.log("data", data);

    }
}

let student1 = new user("sagar", 23) ;
let student2 = new user("tom", 22);




// call back hell

function getdata(dataid, getNextdata){


    setTimeout(() =>{
        console.log("data", dataid);
        if(getNextdata){
            getNextdata();
        }

    }, 2000);
}
// callback hell
getdata(1, ()=>{
    getdata(2,()=>{
        getdata(3, ()=>{
            getdata(4);
        });
});

});


let promise = new Promise((resolve, reject) =>{
    console.log("promise resolve");
    reject("some error occured")
});

 

 