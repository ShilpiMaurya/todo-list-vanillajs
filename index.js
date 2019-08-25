document.getElementById("demo").addEventListener("click", myFunction);
function myFunction() {
  const listElement = document.getElementById("list");
  const todoListButton = document.getElementById("demo");
  if (listElement.classList.contains("hidden")) {
    todoListButton.innerHTML = "Hide Todo-list";
    listElement.classList.remove("hidden");
  } else {
    todoListButton.innerHTML = "Show Todo-list";
    listElement.classList.add("hidden");
  }
}
document.getElementById("add").addEventListener("click", myAdd);
function myAdd() {
  const inputValue = document.getElementById("input").value;
  const newLi = document.createElement("li");
  const newItem = document.createTextNode(inputValue);
  newLi.appendChild(newItem);
  const listUl = document.getElementById("list");
  listUl.appendChild(newLi);
}
// const document = {
//   getElementById(arg) {
//     return { value: "" };
//   }
// };

 