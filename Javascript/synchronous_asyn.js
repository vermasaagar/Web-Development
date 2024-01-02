//sychronous programming vs asynchrous prograaming
//sychronous prog me code block ho sakta hai
//asynchrounus prog me code block nhi hota

//javascript is synchronous programming and single treaded













// ------------Example of asychronous programming


//setTimeout: kitni der baad function ko call krna hai

// console.log("script start");
// function hello(){
//     console.log("hello world");
// }

// setTimeout(hello,1000);
// console.log("script end");
// //mini delay (1000 milisec- 1sec

console.log("script start");
setTimeout(() => {
    console.log("inside setTimeout");
},0);

for(let i=1; i<5; i++){
    console.log("......");
}
console.log("script end");