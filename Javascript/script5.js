// clone nodes


const ul = document.querySelectorAll(".todo-list");
const li = document.createElement("li");
li.textContent = "New todo";
const li2 = li.cloneNode(true);
ul.append(li);//or not both
ul.prepend(li2);
