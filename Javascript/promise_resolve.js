// promise.resolve
// promise chainig


// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value =false;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)

//     });
// }

// myPromise()
// .then(()=>{
//     console.log("Resolved")
// })
// .catch(()=>{
//     console.log("Rejected")
// })


const myPromise = Promise.resolve(5);

Promise.resolve(5).then(value=>{
    console.log(value);
})

// then() method always return promise


