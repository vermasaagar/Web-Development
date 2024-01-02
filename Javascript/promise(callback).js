const h1 =document.querySelector(".h1");
const h2 =document.querySelector(".h2");
const h3 =document.querySelector(".h3");
const h4 =document.querySelector(".h4");
const h5 =document.querySelector(".h5");


function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
               resolve();
            }
            else{
         reject("element not found");
            }

        
        }, time) 
        
    })

}

changeText(h1, "one", "red", 1000)
.then(()=>changeText(h2, "two", "purple", 1000))
.then(()=>changeText(h3, "two", "green", 1000))

.then(()=>changeText(h4, "two", "yellow", 1000))

.then(()=>changeText(h5, "two", "blue", 1000))
.catch((error)=>{
    alert(error);
})

