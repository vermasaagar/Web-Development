

const url = "https://cat-fact.herokuapp.com/facts";
const factpara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getfacts = async ()=>{
    console.log("getting data...");
    let response = await fetch(url);
console.log(response);

let data = await response.json();// json formate that makes readable
// console.log(data[0].text);

factpara.innerText = data[0].text;


    
}











btn.addEventListener("click", getfacts);

