

// 1> Assignment operator

var x=5;
var y=5;
console.log( "both x and y are equal are not", x == y);


// 2> arithmetic operator 

console.log(5+20);
console.log(20-9);
console.log(20/2);
console.log(20*9);



//  increment and decremet operator

// operator : (x++:-postfix or ++x:-prefix):-increment   or (x-- or --x):-decrement
// the increment operator increments and returns the value before incrementing


var num=12;
// var newNum=15++; invalid syntax
var newNum=num++ +8;
console.log(num);
console.log(newNum);

var num=15;
var newNum=++num;
//prefix increment operator means the variable is incremented first and then 
//the  expression is evaluated using the new value of the variable
console.log(num);
console.log(newNum);


// 3> Comparison operator



var a=23;
var b=23;

console.log(a==b);