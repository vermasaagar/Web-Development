

// function getTwoNumbersandAdd(num1, num2, callback){
//     console.log(num1, num2);
//     callback(num1, num2);
// }

// function addtwonum(numbr1, numbr2){
//     console.log(numbr1+numbr2);
// }

// getTwoNumbersandAdd(4, 5, addtwonum);



//callback , callback hell, pyramid of doom in asynchronous prog




const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");



//callback hell
setTimeout(()=>{
    h1.textContent="Heading 1";
    h1.style.color="blue";

    setTimeout(()=>{
        h2.textContent="Heading 2";
        h2.style.color="green";

        setTimeout(()=>{
            h3.textContent="Heading 3";
            h3.style.color="red";

            setTimeout(()=>{
                h4.textContent="Heading 4";
                h4.style.color="violet";

                setTimeout(()=>{
                    h5.textContent="Heading 5";
                    h5.style.color="pink";
                },1000)
            },1000)
        },1000)
    },1000)
},1000);

setTimeout(()=>{
    h1.textContent="heading1";
    

},1000)
















