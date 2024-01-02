let msg = document.getElementById("message");
let msg1 = document.getElementsByName("lang");
let msg2= document.getElementsByTagName("h1");
let msg3 = document.getElementsByClassName("classmessage");


let cont = document.getElementById("container");
let msg4 = cont.getElementsByClassName("classmessage"); 




let msg5 = document.querySelector("#classmessage");
let msg6 = document.querySelectorAll(".classmessage");



let cont2 = document.getElementById("container");
let msg7 = cont2.querySelectorAll(".classmessage");
let msg8 = cont2.querySelectorAll("div h1");
let msg9 = cont2.querySelectorAll("div, h1");



console.log(msg9);


