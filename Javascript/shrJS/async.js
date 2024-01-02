function getdata(dataid){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data", dataid);
            resolve("success");
        },2000);
    });
}

// Async-await function 
// async is used return promise
// await is used to inside the async function to call the promise until the function is not executed its wait.


async function getAlldata(){
    console.log("getting data 1.....");
    await getdata(1);

    console.log("getting data 2.....");
    await getdata(2);


    console.log("getting data 3.....");
    await getdata(3);

}


// 2nd method


( async function() {
    console.log("getting data 1.....");
    await getdata(1);

    console.log("getting data 2.....");
    await getdata(2);


    console.log("getting data 3.....");
    await getdata(3);

})();


// promise chain

console.log("getting data1....");
getdata(1).then((res)=>{
    console.log("getting data2...");
    return getdata(2);
})
.then((res)=> {
    console.log("getting data 3");
    return getdata(3);



})

.then((res)=>{
    console.log(res);
})



// callback hell
getdata(1, () =>{
    console.log("get data 2 ....");
    getdata(2 , ()=>{
        console.log("get data 3 ... ");
        getdata(3, ()=>{
            console.log("get data 4 .....");
            getdata(4);
        });
    });
});