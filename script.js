

var list = document.getElementById("todo-list");
var addBtn = document.getElementById("todo-add-btn");
var addInput = document.getElementById("todo-input");
function createTodo() {
    var text = addInput.value;
if (text === "") {
    return;
}

 var li = document.createElement("li");
 
 var checkbox = document.createElement("input");
 checkbox.classList.add("checkbox");
 checkbox.type ="checkbox";
 var paragraph =  document.createElement("p");
 paragraph.classList.add("paragraph");
 paragraph.textContent = text;

 var remove =  document.createElement("span");
 removeEventListener.classList.add("remove");
 remove.innerHTML = "&cross;";
 li.appendChild(checkbox);
 li.appendChild(paragraph);
 li.appendChild(remove);
 list.appendChild(li);
 addInput.value = "";











 addBtn.addEventListener("click , createTodo");

 addInput.addEventListener("Keypress", function (event) {
     if (event.key === "Enter"){
         createTodo();
     }
 });















}