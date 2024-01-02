//document.createElement()
//append
//prepend
//remove


// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach Students");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");

// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);



// //remove
// const todo1 = ducument.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);






//before
//after



const newTodoItem = document.createElement("li");
newTodoItem.textContent = "Teach Students";
const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
todoList.after(newTodoItem);



