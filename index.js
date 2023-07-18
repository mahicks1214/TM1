console.log('Hello world!')

function addTask(toDoList, input) {
var list = document.getElementById("toDoList");
var listItem = document.createElement("li")
listItem.innerText = inputField.value; // passed the field. 
list.appendChild(listItem);
return false; // stop submission
}

