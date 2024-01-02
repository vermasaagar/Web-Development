

// const allButtons = document.querySelectorAll(".my-buttons button");
// // console.log(allButtons);

// allButtons.forEach9((button)=>{
//     button.addEventListener("click", (e)=>{
//         console.log(e.currentTarget.textContent);
//     })
// })




const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length);

allButtons.forEach(button =>{
    button.addEventListener("click", (e)=>{
    //    console.log(e.target);
    e.target.style.backgroundColor = "yellow";
    e.target.style.color = "#333";
})
})

