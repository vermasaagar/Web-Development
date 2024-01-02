

 const func = function myfunction(){
    const element = document.activeElement.tagName;
    document.getElementById("demo").innerHTML = element;
}

console.log(func);

