//keypress event
//mouseover event

const body = document.body;
// body.addEventListener("keyPress", (e) =>{
//     console.log(e.key);
// });

const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
mainButton.addEventListener("mouseover", () =>{
    console.log("mouseover even ocurred");
});

mainButton.addEventListener("mouseleave", () =>{
    console.log("mouseleave even ocurred");
});
