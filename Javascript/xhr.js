

const URL= "https://jsonplaceholder.typicode.com/posts"; //api request
const xhr =new XMLHttpRequest();


// step 1
// console.log(xhr.readyState);
xhr.open("GET",URL);
// console.log(xhr.readyState);
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState);

    if(xhr.readyState===4){
        console.log(xhr.response);
        const data = JSON.parse(response);
        console.log(typeof data);
    }
}
xhr.send();
