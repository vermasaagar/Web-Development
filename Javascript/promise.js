// // promises in javascript

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// const myPromise =new Promise((resolve, reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("Rice")){
// resolve("fried rice");
// }
// else{
//     reject("couldnt do it");

// }

// })

// //produce


// //how to consume


// myPromise.then((myfriedRice)=>{
//     console.log("lets eat", myfriedRice);
// }, (error)=>{
//     console.log(error);
// })



// function returing promise
function ricePromise(){
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vege") && bucket.includes("rice") && bucket.includes("salt"));{
        resolve({value:"friedrice"});
        }
        else{
            reject("couldnot do it");
        }
    })
}

ricePromise().then(
    (myfriedRice)=>{
        console.log("lets eat", myfriedRice);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)