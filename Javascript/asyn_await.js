

//asyn await

const URL= "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(response);
    return data;

}

// const returned = getPosts(){
//     console.log(returned);
// }

getPosts();
.then((myData)=>{
    console.log(myData);

})
.catch(error=>{
    console.log(error);
})
