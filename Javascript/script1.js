// seelect element using getelementbyId

// const mainHeading = document.getElementByID("main-heading");
// console.log(main-heading);




//select element using query selector

// const mainHeading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// const navItem = document.querySelector(".nav-item");

// console.log(header);




//change the style and background of element


// const mainheading =document.querySelector("div.headline h2");
// mainheading.style.background= "blue";
// mainheading.style.border = "20px solid green";


////get and set attributes


// const link = document.querySelector("a");
// // console.log(link);
// console.log(link.getAttribute("href").slice(1));
// link.setAttribute("href","https:/codprog.com");
// console.log(link.getAttribute("href"));

// const inputElement = document.querySelector(".form-todo input")
// console.log(inputElement.getAttribute("type"));


//get multiple elements using getElements by class name
//get multiple elements items using querySelectorAll


// const navItems = document.getElementsByClassName("nav-item");//html colloction
// console.log(navItems[2]);
// console.log(typeof navItems);

// //or

// const navItems1 = document.querySelectorAll(".nav-item"); //NodeList
// console,log(navItems1[2]);


//difference between html collection and node list

//1,  loop

// we cant use forEach method to iterate through htmlcollection
// for loop
//for of loop
//forEach loop

//let/const navItems = document.getElementsByClassName("a");
// for(let i=0; i<navItems.length; i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";  
// }


// or by using for of loop

// let/const navItems = document.getElementsByTagName("a");

// for(let navItem of navItems){
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";  
// }

//we cant for Each method for this


// using array
//let/const navItems = document.getElementsByTagName("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));
// navItems.forEach(navItem => {
//     navItem.style.backgroundColor="#fff";
//     navItem.style.color="green";
//     navItem.style.fontWeight="bold";  

    
// });


// let navItems = document.querySelectorAll("a");
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));



//innerHtml
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>Inner html changed<h1>";
// headline.innerHTML += "<button class =\"btn\">Learn More</button>"
// console.log(headline.innerHTML);

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.toggle("bd-dark");
// sectionTodo.classList.toggle("bd-dark");


// const header = document.querySelector(".header");
// console.log(header.classList);
// header.classList.add("bg-dark");



const todoList = document.querySelector(".todo-list");
todoList.innerHTML += todoList.innerHTML + "<li>New Todo</li>";
todoList.innerHTML += todoList.innerHTML + "<li>Teach Student</li>";
















