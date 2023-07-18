function addTask(toDoList, input) {
var list = document.getElementById(toDoList);
var listItem = document.createElement("li")
listItem.innerText = input.value; // passed the field. 
list.appendChild(listItem);

var button = document.createElement("button");
button.innerText = "Done!";
button.classList.add('buttonClass');
listItem.appendChild(button);

button.addEventListener("click", () => {
  list.removeChild(listItem);
});
input.value = ""; // Clear the input field
return false;
}