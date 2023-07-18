function addTask(toDoList, input) {
var list = document.getElementById(toDoList);
var listItem = document.createElement("li")
listItem.innerText = input.value; // passed the field. 
list.appendChild(listItem);
// May need to turn into a un-ordered list //
return false; // stop submission

document.getElementById("unordered-list").appendChild(li);
let button = document.createElement("button");
button.innerText = "X";
button.setAttribute = ("id", "b1");
li.appendChild(button);
button.addEventListener("click", () => li.parentNode.removeChild(li));
document.getElementById("unordered-list").appendChild(li);

li.appendChild(button);

document.querySelectorAll('.buttonClass').forEach(item => {

    item.addEventListener('click', event => {
      change()
})})}
