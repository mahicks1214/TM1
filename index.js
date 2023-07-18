function addTask(toDoList, input) {
var list = document.getElementById(toDoList);
var listItem = document.createElement("li")
listItem.innerText = input.value; // passed the field. 
list.appendChild(listItem);
document.getElementById("unordered-list").appendChild(li);

let button = document.createElement("button");
button.innerText = "Done!";
button.classList.add('buttonClass');
li.appendChild(button);

button.addEventListener("click", () => {
  li.parentNode.removeChild(li);
});
document.getElementById("text-box").value = ""; // Clear the input field

/*//add task text box
document.getElementById("submit-btn").addEventListener("click", function() {
  let text = document.getElementById("text-box").value;
  let li = document.createElement("li");
  li.id = "liId";
  li.innerText = text;
  document.getElementById("unordered-list").appendChild(li);

  //X button deletes the task
  let button = document.createElement("button");
  button.innerText = "X";
  button.classList.add('buttonClass');
  li.appendChild(button);

  button.addEventListener("click", () => {
      li.parentNode.removeChild(li);
  });
*/

