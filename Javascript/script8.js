// intro to events
// click



const  btn = document.querySelector(".btn-headline");
// method addeventlistener

// function clickMe(){

//     console.log("You Clicked mw");
// }

// btn.addEventListener("click",clickMe);


// or


btn.addEventListener("click", ()=>{
    console.log("arrow function")
});