

// javascript function  return => function + object

function hello(){
    console.log("hello world");
}

console.log(hello.name);
// we add our own property

hello.myprop = "very unique value";
console.log(hello.myprop);


//function provides more usefull properties
//funvtion gives free space(is called prototype)

console.log(hello.prototype); // {} its a prototype object 
// // only function provide prototype property



hello.prototype.abc ="abc";
hello.prototype.xyz ="xyz";
hello.prototype.sing = function(){
    return "songsss";
};
console.log(hello.prototype.sing());