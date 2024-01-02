// callback function

function myfunc(name){
    console.log("call insdie function one");
    console.log(`your name is ${name}`)
    
}

function myfunc2(callback){
    console.log("hello there");
    callback("sagar");
}

myfunc2(myfunc); 