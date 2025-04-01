const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = getTaskFromInputBox();
    listContainer.appendChild(li);

    li.appendChild(getCross());
  }
  inputBox.value = "";

  function getTaskFromInputBox() {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    return li;
  }
  function getCross() {
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    return span;
  }
}
