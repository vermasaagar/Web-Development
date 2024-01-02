
const allButtons = document.querySelectorAll(".my-buttons button");
// firstButton.addEventListener("click", function(){
// console.log("Hello World");
// })



for(let button of allButtons){
    button.addEventLishner("click",(e)=>{
        console.log(e.currentTarget);
        // console.log(this);
    });
}