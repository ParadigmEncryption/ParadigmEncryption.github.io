var input = document.getElementById("userinput");
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul");
var deleteButton = document.querySelector("button.delete");

function inputLength() {
    return input.value.length;
}

function addToList() {
    var newItem = document.createElement("li");
    var newButton = document.createElement("button");
    ul.appendChild(newItem);
    newItem.appendChild(newButton);
    newButton.appendChild(document.createTextNode("Delete"));
    newItem.appendChild(document.createTextNode(input.value));
    newItem.classList.add("list");
    newButton.classList.add("delete");
    input.value = "";
}

function deleteItem(e) {
    if(e.target.matches("button.delete")) {
        e.target.classList.toggle("done");
        var parent = document.getElementById("listParent");
        var child = e.target.parentElement;
        parent.removeChild(child);
    }
}

function addListAfterClick() {
    if(inputLength() > 0) {
        addToList();
    }
}

function addListAfterKeypress(e) {
    if(inputLength() > 0 && e.keyCode === 13) {
        addToList();
    }
}
 
function crossOffList(e) {
    if(e.target.matches("li.list")) {
        e.target.classList.toggle("done");
    }
}

ul.addEventListener("click", deleteItem);
ul.addEventListener("click", crossOffList);
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);