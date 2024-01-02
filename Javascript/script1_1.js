const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
console.log(todoInput);

todoForm.addEventListener("submit",(e)=>{
e.preventDefault(); // it is used to save by enter or add todo


const newTodoText = todoInput.value;
const newLi = document.createElement("li");
const newLiInnerHtml =`
<span class="text">${newTodoText}</span>
<div class="todo-buttons">
  <button class="todo-btn done">Done</button>
  <button class="todo-btn remove">Remove</button>
</div>`;
newLi.innerHTML = newLiInnerHtml;
todoList.append(newLi);
// console.log(newLi);
todoInput.value ="";
});

todoList.addEventListener("click", (e)=>{
    //check if user click on done button
    // if(e.target.classList.contains("remove")){
    //    console.log("you want to remove something");
    // }


    // if(e.target.classList.contains("done")){
    //     console.log("great!!");
    //  }



    
    if(e.target.classList.contains("remove")){
        const targetedli = e.target.parentNode.parentNode;
        targetedli.remove();
     }


    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration= "line-through";
     }

    // function newFunction(targetedli) {
    //     console.log(targetedli);
    // }
});