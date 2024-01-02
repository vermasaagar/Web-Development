// this keyword 

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",()=>{
    console.log("you clicked me");
    console.log("value of this");
    console.log(this);
});