
//event bubbling
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// child.addEventListener("click", ()=>{
//     console.log("you clicked on child")
// });

// parent.addEventListener("click", ()=>{
//     console.log("you clicked on parent")
// });

// grandparent.addEventListener("click", ()=>{
//     console.log("you clicked on grandparent")
// });


// document.body.addEventListener("click", ()=>{
//     console.log("you clicked on document.body")
// });



// // Event CApturing


// child.addEventListener("click", ()=>{
//     console.log("CApturing on child")
// },true);

// parent.addEventListener("click", ()=>{
//     console.log("CApturing on parent")
// },true);

// grandparent.addEventListener("click", ()=>{
//     console.log("CApturing on grandparent")
// },true);


// document.body.addEventListener("click", ()=>{
//     console.log("CApturing on document.body")
// },true);


//event Delegation
grandparent.addEventListener("click", (e)=>{
    console.log(e.target.textContent);
});


